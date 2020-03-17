import LoginGPetrea1 from '../pageobjects/login-gpetrea1';
import log from '../utils/log4j';

const Util = require('util');
const assert = require('assert')

var timeout = isNaN(process.env.TIMEOUT) ? 30 : process.env.TIMEOUT;

describe(Util.format("A-12 Cambiar contraseña"), function () {
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
            let desplegable = await $("//td[15]/div/ul/li/a/i");
            await desplegable.waitForClickable({ timeout: 10000 });
            await desplegable.click();
            log.info("Desplegable");
            await browser.pause(2500);
            let cambiar = await $("//span[contains(.,'Cambiar contraseña')]");
            await cambiar.waitForClickable({ timeout: 10000 });
            await cambiar.click();
            log.info("Cambiar contraseña");
            await browser.pause(3000);
            let campo1 = await $("//div/input");
            await campo1.waitForClickable({ timeout: 10000 });
            await campo1.setValue("cestel");
            await browser.pause(1000);
            let campo2 = await $("//tr[2]/td[2]/div/input");
            await campo2.waitForClickable({ timeout: 10000 });
            await campo2.setValue("cestel1");
            await browser.pause(1000);
            let campo3 = await $("//tr[3]/td[2]/div/input");
            await campo3.waitForClickable({ timeout: 10000 });
            await campo3.setValue("cestel1");
            log.info("Contraseña cambiada a cestel1");
            await browser.pause(1500);
            let ok = await $("//div[2]/div/div/div/div/div/div/div/div/button");
            await ok.waitForClickable({ timeout: 10000 });
            await ok.click();
            await browser.pause(1500);
            await LoginGPetrea1.logout();
            log.info("Reiniciar sesion");
            await browser.pause(2500);  
            let usuario = await $("//input[@placeholder='Usuario']");
            await usuario.waitForClickable({ timeout: 10000 });
            await usuario.setValue("gpetrea1");
            await browser.pause(1000);
            let contrasena = await $("//tr[7]/td/div/table/tbody/tr/td/table/tbody/tr/td/div/input");
            await contrasena.waitForClickable({ timeout: 10000 });
            await contrasena.setValue("cestel1");
            await browser.pause(500);
            await browser.keys(['Enter']);
            await browser.pause(4000);
            log.info("Sesion reiniciada");
            await desplegable.click();
            log.info("Desplegable");
            await browser.pause(2500);
            await cambiar.click();
            log.info("Cambiar contraseña");
            await browser.pause(3000);
            await campo1.setValue("cestel1");
            await browser.pause(1000);
            await campo2.setValue("cestel");
            await browser.pause(1000);
            await campo3.setValue("cestel");
            log.info("Contraseña cambiada a cestel");
            await browser.pause(1500);
            await ok.click();            
            await browser.pause(4000);
            await LoginGPetrea1.logout();
            log.info("Cerrando...");
        }
        catch (e) {
            log.warn(e);
        }
    });
})





