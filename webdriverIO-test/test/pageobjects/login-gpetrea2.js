import Page from './page';
import log from '../utils/log4j';

const USUARIO = "//input[@placeholder='Usuario'] | //input[@placeholder=\'User ID \'] | //input[@placeholder=\'اسم المستخدم\']";
const CONTRASENA = "//tr[7]/td/div/table/tbody/tr/td/table/tbody/tr/td/div/input";

class LoginGPetrea2 extends Page {

    async open() {
        await super.open('login.zul')
    }

    async waitToLoad() {
        let load = await $(USUARIO);
        await load.waitForDisplayed(1000);
    }

    async login() {
        await this.waitToLoad();
        let user = await $(USUARIO);
        await user.setValue("gpetrea2");
        let pass = await $(CONTRASENA);
        await pass.setValue("cestel");
        await driver.keys(['Enter']);


        let logado;
        let menu;
        await browser.waitUntil(async () => {
            logado = await $("//*[contains(text(),'Usuario ya logado')]");
            menu = await $("//a[img[contains(@src,'menu')]]");
            let fin = (await logado.isExisting() || await menu.isExisting());
            return (fin);
        }, 10000, 'Hay un problema iniciando sesion', 1000);

        if (await logado.isDisplayed()) {
            let ok = await $("//button[contains(.,'OK')]");
            await ok.click();

        }
        await menu.waitForDisplayed(3000);
        return this;
    }

    async logout() {
        let button = await $( '//td[23]/div/ul/li/a');
        await button.click();
        log.info("Cerrar sesion");
    }

    async hangCall() {
        let hang = await $('//div[5]/a');
        await hang.click();
        log.info("Colgar llamada");
    }
}
export default new LoginGPetrea2();

