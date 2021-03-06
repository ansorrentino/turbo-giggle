import browser from 'browser-detect';
import { OverlayContainer } from '@angular/cdk/overlay';
import {
  Component,
  HostBinding,
  OnDestroy,
  OnInit,
  ViewChild,
  ElementRef
} from '@angular/core';
import { ActivationEnd, Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Store, select } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NavItem } from './nav-item';

import {
  ActionAuthLogin,
  ActionAuthLogout,
  AnimationsService,
  TitleService,
  selectAuth,
  routeAnimations,
  AppState
} from '@app/core';
import { environment as env } from '@env/environment';

import {
  NIGHT_MODE_THEME,
  selectSettings,
  SettingsState,
  ActionSettingsPersist,
  ActionSettingsChangeLanguage,
  ActionSettingsChangeAnimationsPageDisabled
} from './settings';

@Component({
  selector: 'anms-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations]
})
export class AppComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<void> = new Subject<void>();
  @ViewChild('appDrawer') appDrawer: ElementRef;
  @HostBinding('class') componentCssClass;

  isProd = env.production;
  envName = env.envName;
  version = env.versions.app;
  year = new Date().getFullYear();
  logo = require('../assets/logo.png');
  languages = ['it', 'en'];
  navigation = [
    { link: 'examples', label: 'anms.menu.contabilita' },
    { link: 'features', label: 'anms.menu.magazzino' },
    { link: 'produzione', label: 'anms.menu.produzione' },
    { link: 'servizio', label: 'anms.menu.servizio' },
    { link: 'finelavoro', label: 'anms.menu.fine-lavoro' },
    { link: 'about', label: 'anms.menu.personalizzato' }
  ];
  navigationSideMenu = [
    ...this.navigation,
    { link: 'settings', label: 'anms.menu.settings' }
  ];

  navItems: NavItem[] = [
    {
      displayName: 'Archivi',
      iconName: 'recent_actors',
      children: [
        {
          displayName: 'Clienti',
          iconName: 'group',
          route: 'michael-prentice'
        },
        {
          displayName: 'Fornitori',
          iconName: 'person',
          route: 'michael-prentice'
        },
        {
          displayName: 'Agenti',
          iconName: 'person',
          route: 'michael-prentice'
        },
        {
          displayName: 'Piano dei conti',
          iconName: 'person',
          route: 'michael-prentice'
        },
        {
          displayName: 'Causali di contabilita',
          iconName: 'person',
          route: 'michael-prentice'
        },
        {
          displayName: 'Pagamenti',
          iconName: 'person',
          route: 'michael-prentice'
        },
        {
          displayName: 'Voci Iva',
          iconName: 'person',
          route: 'michael-prentice'
        },
        {
          displayName: 'Gestione taglie',
          iconName: 'person',
          route: 'michael-prentice'
        }
      ]
    }
  ];

  settings: SettingsState;
  isAuthenticated: boolean;
  isHeaderSticky: boolean;

  constructor(
    public overlayContainer: OverlayContainer,
    private store: Store<AppState>,
    private router: Router,
    private titleService: TitleService,
    private animationService: AnimationsService,
    private translate: TranslateService
  ) {}

  private static trackPageView(event: NavigationEnd) {
    (<any>window).ga('set', 'page', event.urlAfterRedirects);
    (<any>window).ga('send', 'pageview');
  }

  private static isIEorEdgeOrSafari() {
    return ['ie', 'edge', 'safari'].includes(browser().name);
  }

  ngOnInit(): void {
    this.translate.setDefaultLang('en');
    this.subscribeToSettings();
    this.subscribeToIsAuthenticated();
    this.subscribeToRouterEvents();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  onLoginClick() {
    this.store.dispatch(new ActionAuthLogin());
  }

  onLogoutClick() {
    this.store.dispatch(new ActionAuthLogout());
  }

  onLanguageSelect({ value: language }) {
    this.store.dispatch(new ActionSettingsChangeLanguage({ language }));
    this.store.dispatch(new ActionSettingsPersist({ settings: this.settings }));
  }

  private subscribeToIsAuthenticated() {
    this.store
      .pipe(select(selectAuth), takeUntil(this.unsubscribe$))
      .subscribe(auth => (this.isAuthenticated = auth.isAuthenticated));
  }

  private subscribeToSettings() {
    if (AppComponent.isIEorEdgeOrSafari()) {
      this.store.dispatch(
        new ActionSettingsChangeAnimationsPageDisabled({
          pageAnimationsDisabled: true
        })
      );
    }
    this.store
      .pipe(select(selectSettings), takeUntil(this.unsubscribe$))
      .subscribe(settings => {
        this.settings = settings;
        this.setTheme(settings);
        this.setStickyHeader(settings);
        this.setLanguage(settings);
        this.animationService.updateRouteAnimationType(
          settings.pageAnimations,
          settings.elementsAnimations
        );
      });
  }

  private setTheme(settings: SettingsState) {
    const { theme, autoNightMode } = settings;
    const hours = new Date().getHours();
    const effectiveTheme = (autoNightMode && (hours >= 20 || hours <= 6)
      ? NIGHT_MODE_THEME
      : theme
    ).toLowerCase();
    this.componentCssClass = effectiveTheme;
    const classList = this.overlayContainer.getContainerElement().classList;
    const toRemove = Array.from(classList).filter((item: string) =>
      item.includes('-theme')
    );
    if (toRemove.length) {
      classList.remove(...toRemove);
    }
    classList.add(effectiveTheme);
  }

  private setStickyHeader(settings: SettingsState) {
    this.isHeaderSticky = settings.stickyHeader;
  }

  private setLanguage(settings: SettingsState) {
    const { language } = settings;
    if (language) {
      this.translate.use(language);
    }
  }

  private subscribeToRouterEvents() {
    this.router.events.pipe(takeUntil(this.unsubscribe$)).subscribe(event => {
      if (event instanceof ActivationEnd) {
        this.titleService.setTitle(event.snapshot);
      }

      if (event instanceof NavigationEnd) {
        AppComponent.trackPageView(event);
      }
    });
  }
}
