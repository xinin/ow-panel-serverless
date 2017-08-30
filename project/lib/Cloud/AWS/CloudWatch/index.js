'use strict';

const Log = require(__dirname+'/../../Common/Log');

class CloudWatch extends Log{

    constructor(App){
        super(App);
    }

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