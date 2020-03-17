const INICIAR = "//div[3]/button";
const NUMERO = "//div[4]/span/input";
const LLAMAR = "//div[8]/button";
const ETIQUETA = "//td/div/div[3]/table/tbody/tr[2]/td/div[contains(.,'Prueba')]";
const LLAMARETIQUETA = "//td[3]/div/div/div[3]/table/tbody/tr/td/div/a/span/i";
const DESTINOSRADIO = "//span[contains(.,' Destinos radio')]";
const LLAMARRADIO = "//div[2]/div[3]/table/tbody/tr/td/div/a";
const OPERADORES = "//span[contains(.,' Operadores')]";
const LLAMAROPERADOR = "//div[2]/div/div/div[3]/table/tbody/tr[2]/td/div/div/div/a";

import log from '../utils/log4j';

class CallSuite {

    async waitToLoad() {
        this.iniciar = await $(INICIAR);
        await this.iniciar.waitForDisplayed();
    }

    async firstCall() {
        this.iniciar = await $(INICIAR);
        await this.iniciar.waitForClickable({ timeout: 10000 });
        await this.iniciar.click();
        await browser.pause(1500);        
        log.info("Iniciar Comunicacion")
        this.numero = await $(NUMERO);
        await this.numero.waitForClickable({ timeout: 10000 });
        await browser.pause(1500);
        this.numero.setValue('502');
        await browser.pause(1500);
        this.llamar = await $(LLAMAR);
        await this.llamar.waitForClickable({ timeout: 10000 });
        this.llamar.click();
        log.info("Llamada realizada a 502");
        await browser.pause(3500);
    }

    async secondCall() {
        await browser.pause(3500)
        log.info("Iniciar segunda Comunicacion");  
        await this.numero.waitForClickable({ timeout: 10000 });
        await browser.pause(1500);
        this.numero.setValue('501');
        await browser.pause(1500);
        await this.llamar.waitForClickable({ timeout: 10000 });
        this.llamar.click();
        log.info("Llamada realizada a 501");
        await browser.pause(3500);
    }

    async labelCall() {
        await browser.pause(3500);        
        this.label = await $(ETIQUETA);
        await this.label.waitForClickable({ timeout: 10000 });
        this.label.click();
        log.info("Etiqueta Prueba");
        await browser.pause(3500);
        this.callLabel = await $(LLAMARETIQUETA);
        await this.callLabel.waitForClickable({ timeout: 10000 });
        this.callLabel.click();
        log.info("Llamada a etiqueta prueba");
        await browser.pause(3500);
    }

    async radioCall() {
        await browser.pause(3500);
        this.radioDestinations = await $(DESTINOSRADIO);
        await this.radioDestinations.waitForClickable({ timeout: 10000 });
        this.radioDestinations.click();
        log.info("Destinos Radio");
        await browser.pause(3500);
        this.callRadio = await $(LLAMARRADIO);
        await this.callRadio.waitForClickable({ timeout: 10000 });
        this.callRadio.click();
        log.info("Llamada a radio");
        await browser.pause(3500);
    }

    async operatorCall() {
        await browser.pause(3500);
        this.operators = await $(OPERADORES);
        await this.operators.waitForClickable({ timeout: 10000 });
        this.operators.click();
        log.info("Operadores");
        await browser.pause(3500);
        this.callOperator = await $(LLAMAROPERADOR);
        await this.callOperator.waitForClickable({ timeout: 10000 });
        this.callOperator.click();
        log.info("Llamada a operador");
        await browser.pause(10000);
    }
}
export default new CallSuite();