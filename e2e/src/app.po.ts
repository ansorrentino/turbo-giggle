import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getCurrentYear() {
    return element(by.css('.signature .year')).getText();
  }
}
