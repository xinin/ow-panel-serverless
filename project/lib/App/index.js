'use strict';

const instance = {};

class App {

    static Config(){
        if(!instance.Config){
            instance.Config = require(__dirname+'/../Config');
        }
        return instance.Config;
    }

    static Utils(){
        if(!instance.Utils){
            let utils = require(__dirname+'/../Utils');
            instance.Utils = new utils();
        }
        return instance.Utils;
    }

    static Cloud(){
        if(!instance.Cloud){
            let cloud = require(__dirname+'/../Cloud');
            instance.Cloud = new cloud();
        }
        return instance.Cloud;
    }


}

module.exports = App;