import { by, element } from 'protractor';

export class NavbarPage {
    linkHome = element(by.xpath('/html/body/app-root/app-navbar/nav/a[0]'));
  
    async clickLinkHome() {
        await this.linkHome.click();
    }
}
