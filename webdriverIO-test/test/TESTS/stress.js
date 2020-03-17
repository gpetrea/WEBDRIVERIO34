
import LoginPage from '../pageobjects/login.page';
import HomePage from '../pageobjects/home.page';
import log from '../utils/log4j';
import * as CestelUtils from '../utils/utils';

const Util = require('util');
const assert = require('assert')

var timeout = isNaN(process.env.TIMEOUT) ? 30 : process.env.TIMEOUT;

describe(Util.format("[%s] Stress test case",process.env.USERNAME), function() {
  var until;
  
  beforeEach(function() {
    until = Date.now();
    log.info("Iniciando test (timeout=%d)",timeout)
  })
  
  afterEach(function() {
      log.info("Fin test")
  })
  
  it(Util.format("[%s] Test auto respuesta",process.env.USERNAME), async function() {
    try {
        await LoginPage.open();
        await LoginPage.login(process.env.USERNAME,"cestel")
        
        await HomePage.waitToLoad();
        await HomePage.callDWS();
        await HomePage.openCaller();
        let t = 0;
        while (  t < timeout ) {
            log.info("Esperando %d seg más",timeout - t);
            await HomePage.responder();
            await driver.pause(CestelUtils.getRandomInt(10000,40000));
            t = parseInt( (Date.now() - until) / 1000 );
        }
        log.info("cerrando...");
    } catch (e) {
        log.warn(e);
    }
  })
})
