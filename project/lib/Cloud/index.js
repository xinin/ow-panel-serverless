'use strict';

const App = require(__dirname+'/../App');
const Config = App.Config();


class Cloud {

    constructor(){
        if(Config.cloud === 'aws'){
            this.useAWS();
        } else {
            throw new Error(`Cloud ${ Config.cloud } not configured`);
        }
    }

    useAWS(){
        let log = require(__dirname+'/../CloudWatch');
        this.Log = new log();
    }


}

module.exports = Cloud;