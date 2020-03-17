import LoginGPetrea1 from '../pageobjects/login-gpetrea1';
import log from '../utils/log4j';

const Util = require('util');
const assert = require('assert')

var timeout = isNaN(process.env.TIMEOUT) ? 30 : process.env.TIMEOUT;

describe(Util.format("A-16 Salir/Desconectar"), function () {
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
            await browser.pause(10000);
            await LoginGPetrea1.logout();
            log.info("Sesion Cerrada");
            await browser.pause(2500);
            await LoginGPetrea1.login();
            log.info("Iniciar sesion");
            await browser.pause(10000);
            let desplegable = await $("//td[15]/div/ul/li/a/i");
            await desplegable.waitForClickable({ timeout: 10000 });
            await desplegable.click();
            await browser.pause(1500);
            let desconectar = await $("//a[contains(.,' Desconectar')]");
            await desconectar.waitForClickable({ timeout: 10000 });
            await desconectar.click();
            await browser.pause(2500);
            log.info("Cerrando...");
        }
        catch (e) {
            log.warn(e);
        }
    });
})




