import LoginGPetrea1 from '../pageobjects/login-gpetrea1';
import CallSuite from '../pageobjects/call-suite';
import log from '../utils/log4j';

const Util = require('util');
const assert = require('assert')

var timeout = isNaN(process.env.TIMEOUT) ? 30 : process.env.TIMEOUT;

describe(Util.format("A-7 Cambiar modo de participacion"), function () {
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
            let cambiarNormalTrunk = await $("//tr[2]/td/div/div/div[3]/a");
            await cambiarNormalTrunk.waitForClickable({ timeout: 10000 });
            await cambiarNormalTrunk.click();
            await browser.pause(1500);
            log.info("Cambiar modo de participacion");
            let supervisorTrunk = await $("//button[contains(.,' Supervisor')]");
            await supervisorTrunk.waitForClickable({ timeout: 10000 });
            await supervisorTrunk.click();
            log.info("Supervisor");
            await browser.pause(3000);
            let cambiarSupervisorTrunk = await $("//tr[2]/td/div/div/div[4]/a");
            await cambiarSupervisorTrunk.waitForClickable({ timeout: 10000 });
            await cambiarSupervisorTrunk.click();
            log.info("Camabiar");
            await browser.pause(1500);
            let escuchaTrunk = await $("//button[contains(.,' Escucha')]");
            await escuchaTrunk.waitForClickable({ timeout: 10000 });
            await escuchaTrunk.click();
            log.info("Escucha");
            await browser.pause(3000);
            let cambiarEscuchaTrunk = await $("//tr[2]/td/div/div/div[5]/a");
            await cambiarEscuchaTrunk.waitForClickable({ timeout: 10000 });
            await cambiarEscuchaTrunk.click();
            log.info("Cambiar");
            await browser.pause(1500);
            let limitadoTrunk = await $("//button[contains(.,' Limitado')]");
            await limitadoTrunk.waitForClickable({ timeout: 10000 });
            await limitadoTrunk.click();
            log.info("Limitado");
            await browser.pause(3000);
            let cambiarLimitadoTrunk = await $("//tr[2]/td/div/div/div[6]/a");
            await cambiarLimitadoTrunk.waitForClickable({ timeout: 10000 });
            await cambiarLimitadoTrunk.click();
            log.info("Cambiar");
            await browser.pause(1500);
            let normalTrunk = await $("//button[contains(.,' Normal')]");
            await normalTrunk.waitForClickable({ timeout: 10000 });
            await normalTrunk.click();
            log.info("Normal");
            await browser.pause(4000);
            await LoginGPetrea1.hangCall(); 

            
            /*
            let iniciar = await $("//div[3]/button");
            await iniciar.waitForClickable({ timeout: 10000 });
            await iniciar.click();
            log.info("Iniciar comunicacion");
            await browser.pause(2000);
            await CallSuite.operatorCall();
            await browser.pause(4000);

            let cambiarNormalTerminal = await $("//tr[2]/td/div/div/div[3]/a");
            await cambiarNormalTerminal.waitForClickable({ timeout: 10000 });
            await cambiarNormalTerminal.click();
            log.info("Cambiar");
            await browser.pause(1500);

            let supervisorTerminal = await $("//button[contains(.,' Supervisor')]");
            await supervisorTerminal.waitForClickable({ timeout: 10000 });
            await supervisorTerminal.click();
            log.info("Supervisor");
            await browser.pause(3000);

            let cambiarSupervisorTerminal = await $("//tr[2]/td/div/div/div[4]/a");
            await cambiarSupervisorTerminal.waitForClickable({ timeout: 10000 });
            await cambiarSupervisorTerminal.click();
            log.info("Cambiar");
            await browser.pause(1500);

            let escuchaTerminal = await $("//button[contains(.,' Escucha')]");
            await escuchaTerminal.waitForClickable({ timeout: 10000 });
            await escuchaTerminal.click();
            log.info("Escucha");
            await browser.pause(3000);
            
            let cambiarEscuchaTerminal = await $("//tr[2]/td/div/div/div[5]/a");
            await cambiarEscuchaTerminal.waitForClickable({ timeout: 10000 });
            await cambiarEscuchaTerminal.click();
            log.info("Cambiar");
            await browser.pause(1500);

            let normalTerminal = await $("//button[contains(.,' Operador')]");
            await normalTerminal.waitForClickable({ timeout: 10000 });
            await normalTerminal.click();
            log.info("Operador");
            await browser.pause(3000);
            */


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





