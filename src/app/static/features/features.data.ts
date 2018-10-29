import { environment as env } from '@env/environment';
import { Feature } from './features.model';

export const features: Feature[] = [
  {
    name: 'Clienti',
    version: env.versions.angular,
    description: 'Descrizione funzionalita',
    github: 'https://github.com/angular/angular',
    documentation: 'https://angular.io/docs/ts/latest/'
  },
  {
    name: 'Fornitori',
    version: env.versions.material,
    description: 'Descrizione funzionalita',
    github: 'https://github.com/angular/material2/',
    documentation: 'https://material.angular.io/'
  },
  {
    name: 'Agenti',
    version: env.versions.angularCli,
    description: 'Descrizione funzionalita',
    github: 'https://github.com/angular/angular-cli',
    documentation: 'https://cli.angular.io/'
  },
  {
    name: 'Articoli',
    version: env.versions.ngrx,
    description: 'Descrizione funzionalita',
    github: 'https://github.com/ngrx/platform',
    documentation: 'http://ngrx.github.io/',
    medium:
      'https://medium.com/@tomastrajan/object-assign-vs-object-spread-in-angular-ngrx-reducers-3d62ecb4a4b0'
  },
  {
    name: 'Piano dei conti',
    version: env.versions.rxjs,
    description: 'Descrizione funzionalita',
    github: 'https://github.com/ReactiveX/RxJS',
    documentation: 'http://reactivex.io/rxjs/',
    medium:
      'https://medium.com/@tomastrajan/practical-rxjs-in-the-wild-requests-with-concatmap-vs-mergemap-vs-forkjoin-11e5b2efe293'
  },
  {
    name: 'Causali di contabilità',
    version: env.versions.bootstrap,
    description: 'Descrizione funzionalita',
    github: 'https://github.com/twbs/bootstrap',
    documentation: 'https://getbootstrap.com/docs/4.0/layout/grid/',
    medium:
      'https://medium.com/@tomastrajan/how-to-build-responsive-layouts-with-bootstrap-4-and-angular-6-cfbb108d797b'
  },
  {
    name: 'Voci Iva',
    version: env.versions.typescript,
    description: 'Descrizione funzionalita',
    github: 'https://github.com/Microsoft/TypeScript',
    documentation: 'https://www.typescriptlang.org/docs/home.html'
  },
  {
    name: 'Gestione taglie',
    version: env.versions.ngxtranslate,
    description: 'Descrizione funzionalita',
    github: 'https://github.com/ngx-translate/core',
    documentation: 'http://www.ngx-translate.com/'
  }
];
