import LoginGPetrea1 from '../pageobjects/login-gpetrea1';
import CallSuite from '../pageobjects/call-suite';
import log from '../utils/log4j';

const Util = require('util');
const assert = require('assert')

var timeout = isNaN(process.env.TIMEOUT) ? 30 : process.env.TIMEOUT;

describe(Util.format("A-6 Conferenciar"), function () {
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
            await consultation.waitForClickable({ timeout: 10000 });
            await consultation.click();
            log.info("Consulta");
            await browser.pause(2000);
            await CallSuite.secondCall();
            await browser.pause(5000);
            let conference = await $("//tr[2]/td/div/div/div[2]/div/div/a/span/i");
            await conference.waitForClickable({ timeout: 10000 });
            await conference.click();
            log.info("Conferenciar");
            await browser.pause(3000);
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



