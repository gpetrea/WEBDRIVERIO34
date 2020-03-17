const log4js = require('log4js');

// Logging
log4js.configure({
    appenders: {
        out: { type: 'stdout', layout: {
        type: 'pattern',
        pattern: '%d %p [%X{user}] %m%n',
        tokens: {
            user: function(logEvent) {
            return AuthLibrary.currentUser();
            }
        }
        }}
    },
    categories: { default: { appenders: ['out'], level: 'debug' } }
});

const log = log4js.getLogger();
log.addContext("user",process.env.USERNAME);

export default log;
