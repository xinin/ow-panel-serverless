'use strict';


class Cloud {

    constructor(App){
        this.App = App;
        let Config = this.App.Config();
        if(Config.cloud === 'aws'){
            this.useAWS();
        } else {
            throw new Error(`Cloud ${ Config.cloud } not configured`);
        }
    }

    useAWS(){
        let log = require(__dirname+'/AWS/CloudWatch');
        this.Log = new log(this.App);
    }





}

module.exports = Cloud;