'use strict';

class App {

    constructor(){
        this.instance = {};
    }

    Config(){
        if(!this.instance.Config){
            this.instance.Config = require(__dirname+'/../Config');
        }
        return this.instance.Config;
    }

    Utils(){
        if(!this.instance.Utils){
            let utils = require(__dirname+'/../Utils');
            this.instance.Utils = new utils(this);
        }
        return this.instance.Utils;
    }

    Cloud(){
        if(!this.instance.Cloud){
            let cloud = require(__dirname+'/../Cloud');
            this.instance.Cloud = new cloud(this);
        }
        return this.instance.Cloud;
    }


}

module.exports = App;