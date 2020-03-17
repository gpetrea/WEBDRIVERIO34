import LoginGPetrea1 from '../pageobjects/login-gpetrea1';
import CallSuite from '../pageobjects/call-suite';
import log from '../utils/log4j';

const Util = require('util');
const assert = require('assert')

var timeout = isNaN(process.env.TIMEOUT) ? 30 : process.env.TIMEOUT;

describe(Util.format("A-9 Mutear"), function () {
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
            let mute = await $('//div[3]/div/div[3]/a');
            await browser.pause(4000);
            await mute.waitForClickable({ timeout: 10000 });
            await mute.click();
            log.info("Muteado");
            await browser.pause(5000);
            await mute.click();
            log.info("Desmuteado");
            await browser.pause(2500);
            await LoginGPetrea1.hangCall();             
            await LoginGPetrea1.logout();
            log.info("Cerrando...");
        }
        catch (e) {
            log.warn(e);
        }
    });
})