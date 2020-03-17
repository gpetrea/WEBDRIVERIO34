import LoginGPetrea1 from '../pageobjects/login-gpetrea1';
import log from '../utils/log4j';
import CallSuite from '../pageobjects/call-suite';

const Util = require('util');
const assert = require('assert')

var timeout = isNaN(process.env.TIMEOUT) ? 30 : process.env.TIMEOUT;

describe(Util.format("A-5 Consultar"), function () {
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
            let consultation = await $("//div[3]/a/span/i");
            let hang = await $("//div[2]/div/div[3]/a");
            await consultation.waitForClickable({ timeout: 10000 });
            await consultation.click();
            log.info("Consulta");
            await browser.pause(2000);
            await CallSuite.secondCall();
            log.info("Consulta a 501");
            await browser.pause(5000);
            await hang.click();
            await browser.pause(1500);
            await hang.click();
            log.info("Colgando las llamadas");
            await browser.pause(2000);
            await CallSuite.firstCall();
            await browser.pause(4000);
            await consultation.click();
            log.info("Consulta");
            await browser.pause(1500);
            await CallSuite.labelCall();
            log.info("Consulta a etiqueta");
            await browser.pause(5000);
            await hang.click();
            await browser.pause(1500);
            await hang.click();
            log.info("Colgando las llamadas");
            await browser.pause(2000);

            /*
            await CallSuite.firstCall();
            await browser.pause(4000);
            await consultation.click();
            log.info("Consulta");
            await browser.pause(1500);
            await CallSuite.radioCall();
            log.info("Consulta a radio");
            await browser.pause(5000);
            await hang.click(); 
            await browser.pause(1500);
            await hang.click();
            log.info("Colgando las llamadas");
            await browser.pause(2000);

            await CallSuite.firstCall();
            await browser.pause(4000);
            await consultation.click();
            log.info("Consulta");
            await browser.pause(1500);
            await CallSuite.operatorCall();
            log.info("Consulta a operador");
            await browser.pause(5000);
            await hang.click();
            await browser.pause(1500);
            await hang.click();
            log.info("Colgando las llamadas");
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


