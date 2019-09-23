'use strict';

module.exports = function serveCommand(api, opts) {

    const registerMethods = require('./methods');
    const devCommand = require('./dev');

    registerMethods(api);

    // serve
    devCommand(api, opts);
};
