import LoginGPetrea1 from '../pageobjects/login-gpetrea1';
import log from '../utils/log4j';

const Util = require('util');
const assert = require('assert')

var timeout = isNaN(process.env.TIMEOUT) ? 30 : process.env.TIMEOUT;

describe(Util.format("A-18 Cambiar idioma"), function () {
    var until;

    beforeEach(function () {
        until = Date.now();
        log.info("Iniciando test (timeout=%d)", timeout)
    })

    afterEach(function () {
        log.info("Fin test")
    })

    it(Util.format(), async function () {
        try {
            await LoginGPetrea1.open();
            await LoginGPetrea1.waitToLoad();
            await LoginGPetrea1.login();
            await browser.pause(2500);
            let desplegable = await $("//td[15]/div/ul/li/a/i");
            await desplegable.waitForClickable({ timeout: 40000});
            await desplegable.click();
            log.info("Desplegble");
            await browser.pause(2500);
            let cambiaresp = await $("//span[contains(.,'Cambiar idioma')]");
            await cambiaresp.click(); log.info("clic");
            let arabe = await $("//span[contains(.,'العربية')]");
            await arabe.waitForClickable({ timeout: 10000 });
            await arabe.click();
            log.info("Arabe");
            let okesp = await $("//button[contains(.,'OK')]");
            await okesp.waitForClickable({ timeout: 10000 });
            await browser.pause(1500);
            await okesp.click();
            await browser.pause(2500);
            await LoginGPetrea1.logout();
            await browser.pause(2500);
            await LoginGPetrea1.waitToLoad();
            await LoginGPetrea1.login();
            await browser.pause(2500);
            await desplegable.click();
            log.info("Desplegble");
            let cambiararab = await $("//a[contains(.,' تغيير اللغة')]");
            await cambiararab.click();
            let ingles = await $("//span[contains(.,'English')]");
            await ingles.click();
            log.info("Ingles");
            let okarab = await $("//button[contains(.,'موافق')]");
            await okarab.waitForClickable({ timeout: 10000 });
            await okarab.click();
            await browser.pause(2500);
            await LoginGPetrea1.logout();
            await browser.pause(2500);
            await LoginGPetrea1.waitToLoad();
            await LoginGPetrea1.login();
            await browser.pause(2500);
            await desplegable.click();
            log.info("Desplegble");
            let cambiaring = await $("//a[contains(.,' Change language')]");
            await cambiaring.click();
            let espanol = await $("//span[contains(.,'Español')]");
            await espanol.click();
            log.info("Español");
            await browser.pause(2500);
            await okesp.click();
            await LoginGPetrea1.logout();
            await browser.pause(2500);
            await LoginGPetrea1.waitToLoad();
            await LoginGPetrea1.login();
            await browser.pause(4000);
            await LoginGPetrea1.logout();
            log.info("Cerrando...");
        }
        catch (e) {
            log.warn(e);
        }
    });
})

