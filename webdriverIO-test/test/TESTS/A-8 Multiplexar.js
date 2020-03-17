import LoginGPetrea1 from '../pageobjects/login-gpetrea1';
import CallSuite from '../pageobjects/call-suite';
import log from '../utils/log4j';

const Util = require('util');
const assert = require('assert')

var timeout = isNaN(process.env.TIMEOUT) ? 30 : process.env.TIMEOUT;

describe(Util.format("A-8 Multiplexar"), function () {
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
            await CallSuite.firstCall(); 
            await browser.pause(4000);
            let integrar = await $("//div/a/span");
            await integrar.waitForClickable({ timeout: 10000 });
            await integrar.click(); log.info("Añadir otra llamada");
            await CallSuite.secondCall();
            await browser.pause(6000);
            let multiplexar = await $("//div[3]/div/div[2]/a/span/i");
            await multiplexar.waitForClickable({ timeout: 10000 });
            await multiplexar.click(); log.info("Multiplexar");
            await browser.pause(6000);
            await multiplexar.click(); log.info("Quitar multiplexar");
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





