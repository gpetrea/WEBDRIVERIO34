import LoginGPetrea1 from '../pageobjects/login-gpetrea1';
import log from '../utils/log4j';
import CallSuite from '../pageobjects/call-suite';

const Util = require('util');
const assert = require('assert')

var timeout = isNaN(process.env.TIMEOUT) ? 30 : process.env.TIMEOUT;

describe(Util.format("A-2 Retener"), function () {
    var until;

    beforeEach(function () {
        until = Date.now();
        log.info("Iniciando test (timeout=%d)", timeout)
    })

    afterEach(function () {
        log.info("Fin test")
    })

    it(Util.format(),async function () {
        try {
            await LoginGPetrea1.open();
            await LoginGPetrea1.waitToLoad();
            await LoginGPetrea1.login();
            await CallSuite.firstCall();
            let retener = await $('//div[2]/a');
            await retener.waitForClickable({ timeout: 10000 });
            await retener.click();
            log.info("Retener..");
            await browser.pause(5000);
            await retener.click();
            log.info("Reanudar");
            await browser.pause(5000);
            let campo = await $('//div[2]/div/div/div/div/div/div[2]/div/div[3]/table/tbody/tr/td[2]');
            await campo.waitForClickable({ timeout: 10000 });
            await campo.click();
            log.info("Pausa con el campo..");
            await browser.pause(5000);
            await campo.click();
            log.info("Reanudar");
            await browser.pause(4000);
            await LoginGPetrea1.hangCall();
            await browser.pause(2500);
            await LoginGPetrea1.logout();
            log.info("Cerrando...");
        }
        catch (e) {
            log.warn(e);
        }
    });
})