import LoginGPetrea1 from '../pageobjects/login-gpetrea1';
import log from '../utils/log4j';

const Util = require('util');
const assert = require('assert')

var timeout = isNaN(process.env.TIMEOUT) ? 30 : process.env.TIMEOUT;

describe(Util.format("A-17 Disponibilidad"), function () {
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
            await browser.pause(4000);
            let desplegable = await $("//span/a/i");
            await desplegable.waitForClickable({ timeout: 10000 });
            await desplegable.click();
            log.info("Desplegable");
            await browser.pause(2500);
            let noDisponible = await $("//li[contains(.,'No disponible')]");
            await noDisponible.waitForClickable({ timeout: 10000 });
            await noDisponible.click();
            log.info("No disponible");
            await browser.pause(5000);
            await desplegable.click();
            log.info("Desplegable");
            await browser.pause(2500);
            let disponible = await $("//li[contains(.,'Disponible')]");
            await disponible.waitForClickable({ timeout: 10000 });
            await disponible.click();
            log.info("Disponible");
            await browser.pause(5000);    
            await LoginGPetrea1.logout();
            log.info("Cerrando...");
        }
        catch (e) {
            log.warn(e);
        }
    });
})




