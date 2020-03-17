import LoginGPetrea1 from '../pageobjects/login-gpetrea1';
import CallSuite from '../pageobjects/call-suite';
import log from '../utils/log4j';

const Util = require('util');
const assert = require('assert')

var timeout = isNaN(process.env.TIMEOUT) ? 30 : process.env.TIMEOUT;

describe(Util.format("A-22 Revisar version"), function () {
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
            let calypso = await $("//td/img");
            await calypso.waitForClickable({ timeout: 10000 });
            await calypso.click();
            log.info("Imagen Calypso");
            await browser.pause(2500);
            await browser.keys(['\uE00C']);
            await browser.pause(2500);
            let cestel = await $("//td[21]/img");
            await cestel.waitForClickable({ timeout: 10000 });
            await cestel.click();
            log.info("Imagen Cestel");
            await browser.pause(2500);
            await browser.keys(['\uE00C']);
            await browser.pause(2500);
            let despleable = await $("//i");
            await despleable.waitForClickable({ timeout: 10000 });
            await despleable.click();
            log.info("Desplegable...");
            await browser.pause(1500);
            let acerca = await $("//a[contains(.,' Acerca de Calypso')]");
            await acerca.waitForClickable({ timeout: 10000 });
            await acerca.click();
            log.info("Acerca de Calypso");
            await browser.pause(2500);
            await browser.keys(['\uE00C']);
            await browser.pause(3500);
            await LoginGPetrea1.logout();
            log.info("Cerrando...");
        }
        catch (e) {
            log.warn(e);
        }
    });
})



