import LoginGPetrea1 from '../pageobjects/login-gpetrea1';
import CallSuite from '../pageobjects/call-suite';
import log from '../utils/log4j';

const Util = require('util');
const assert = require('assert')

const JOIN = "//div/a/span";
const HANGMYDEVICE = "//div[6]/a/span/i";
const PARTICIPATE = "//a/span/i";
const SUPERVISE = "//div[2]/a";
const LISTEN = "//div[3]/a/span";


var timeout = isNaN(process.env.TIMEOUT) ? 30 : process.env.TIMEOUT;

describe(Util.format("A-10 Intruir"), function () {
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
            await browser.pause(2500);
            this.integrar = await $(JOIN);
            await this.integrar.waitForClickable({ timeout: 10000 });
            await this.integrar.click();
            log.info("Integrar otra llamada");
            await CallSuite.secondCall();
            await browser.pause(4000);
            this.colgarYo = await $(HANGMYDEVICE);
            await this.colgarYo.waitForClickable({ timeout: 10000 });
            await this.colgarYo.click();
            log.info("Colgar yo");
            await browser.pause(3000);
            this.participar = await $(PARTICIPATE);
            await this.participar.waitForClickable({ timeout: 10000 });
            await this.participar.click();
            log.info("Participar");
            await browser.pause(7000);
            await this.colgarYo.click();
            log.info("Colgar yo");
            await browser.pause(3000);
            this.supervisar = await $(SUPERVISE);
            await this.supervisar.waitForClickable({ timeout: 10000 });
            await this.supervisar.click();
            log.info("Supervisar");
            await browser.pause(7000);
            await this.colgarYo.click();
            log.info("Colgar yo");
            await browser.pause(3000);
            this.escuchar = await $(LISTEN);
            await this.escuchar.waitForClickable({ timeout: 10000 });
            await this.escuchar.click();
            log.info("Escuchar");
            await browser.pause(7000);
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



