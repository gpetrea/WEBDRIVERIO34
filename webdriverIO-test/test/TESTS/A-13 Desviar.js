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
            await browser.pause(4000);
            let desviar = await $("//div[4]/a/span/i");
            await desviar.waitForClickable({ timeout: 10000 });
            await desviar.click();
            log.info("Desviar");
            await browser.pause(2000);
            await CallSuite.secondCall();
            log.info("Desviar a 501 ");
            await browser.pause(7000);
            let intruir = await $("//a/span/i");
            await intruir.waitForClickable({ timeout: 10000 });
            await intruir.click();
            await browser.pause(2000);            
            let colgar = await $("//tr[2]/td[2]/div/div/div/a");
            await colgar.waitForClickable({ timeout: 10000 });
            await colgar.click();
            await browser.pause(2500);

            /*
            await desviar.click();
            log.info("Desciar");
            await browser.pause(2000);
            await CallSuite.radioCall();
            log.info("Desviar a radio");
            await browser.pause(7000);
            await intruir.click();
            await browser.pause(2000);
            await colgar.click();
            await browser.pause(2500);
            
            await desviar.click();
            log.info("Desviar");
            await browser.pause(2000);
            await CallSuite.operatorCall();
            log.info("Desviar a operador");
            await browser.pause(7000);
            await intruir.click();      
            */

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



