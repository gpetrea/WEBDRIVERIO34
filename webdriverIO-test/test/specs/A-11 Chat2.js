import LoginGPetrea2 from '../pageobjects/login-gpetrea2';
import log from '../utils/log4j';

const Util = require('util');
const assert = require('assert')

const INICIAR = "//div[3]/button";
const OPERADORES = "//span[contains(.,' Operadores')]"
const PRESENTE = "//tr[3]/td/div/div/div/a"
const CHAT = "//div[4]/a"
const MENSAJE = "//textarea[@placeholder='Mensaje']"

var timeout = isNaN(process.env.TIMEOUT) ? 30 : process.env.TIMEOUT;

describe(Util.format("A-11 Chat 2"), function () {
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

            await LoginGPetrea2.open();
            await LoginGPetrea2.waitToLoad();
            await LoginGPetrea2.login();



            this.iniciar = await $(INICIAR);
            await this.iniciar.waitForClickable({ timeout: 10000 });
            await this.iniciar.click();
            log.info("Iniciar Comunicacion");
            this.operadores = await $(OPERADORES);
            await this.operadores.waitForClickable({ timeout: 10000 });
            await this.operadores.click();
            log.info("Operadores");
            await browser.pause(4000);
            this.presente =  $(PRESENTE);
            await this.presente.waitForExist(10000);
            this.chat =  $(CHAT);
            await this.chat.waitForClickable({ timeout: 10000 });
            await this.chat.click();
            log.info("Ventana de chat");
            await browser.pause(4000); 
            await browser.switchWindow("{ new= org.zkoss.util.resource.impl.LabelLoaderImpl$ExValue@3ff149b5, $ = org.zkoss.util.resource.impl.LabelLoaderImpl$ExValue@3cf52c7a}");
            this.mensaje = $(MENSAJE); 
            await this.mensaje.waitForExist(10000);
            await browser.pause(4000);


            await browser.pause(4000);


            await this.mensaje.setValue("Segundo mensaje");
            await driver.keys(['Enter']);
            log.info("Segundo mensaje");
            await browser.pause(1500);


            await browser.pause(4000);


            await this.mensaje.setValue("Cuarto mensaje");
            await driver.keys(['Enter']);
            log.info("Cuarto mensaje");
            await browser.pause(1500);


            await browser.close();

            await browser.pause(2500);
            await LoginGPetrea2.logout();
            log.info("Cerrando...");
        }
        catch (e) {
            log.warn(e);
        }
    });
})

