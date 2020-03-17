import LoginGPetrea1 from '../pageobjects/login-gpetrea1';
import CallSuite from '../pageobjects/call-suite';
import log from '../utils/log4j';

const Util = require('util');
const assert = require('assert')

var timeout = isNaN(process.env.TIMEOUT) ? 30 : process.env.TIMEOUT;

describe(Util.format(""), function () {
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
            log.info("Llamada con 502");
            await browser.pause(7000);
            await LoginGPetrea1.hangCall(); 
            await browser.pause(2500);
            let iniciar = await $("//div[3]/button");
            await iniciar.waitForClickable({ timeout: 10000 });
            await iniciar.click();
            await browser.pause(1500);
            await CallSuite.labelCall();
            log.info("Llamada a etiqueta");
            await browser.pause(7000);
            await LoginGPetrea1.hangCall(); 
            await browser.pause(2500);

            /*
            await iniciar.click();
            await browser.pause(1500);
            await CallSuite.radioCall();
            log.info("Llamada a radio");
            await browser.pause(7000);
            await LoginGPetrea1.hangCall();
            await browser.pause(2500);
            
            await iniciar.click();
            await browser.pause(1500);
            await CallSuite.operatorCall();
            log.info("Llamada a operador");
            await browser.pause(7000);
            await LoginGPetrea1.hangCall();
            await browser.pause(2500);
            */
            
            await browser.pause(2500);
            await LoginGPetrea1.logout();
            log.info("Cerrando...");
        }
        catch (e) {
            log.warn(e);
        }
    });
})




