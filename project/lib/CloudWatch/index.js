'use strict';

const Utils = require(__dirname+'/../Utils');


class CloudWatch {

    info ( req, message) {
        console.log(message);
    }

    error (req, message) {
        console.log(message);
    }

    writeLog(req, message, log){

    }




}

module.exports = CloudWatch;