'use strict';


class App {

    constructor(){
        this.instance = {};
        // this.Test = function(){
        //     if(!this.instance.Cloud){
        //         let cloud = require(__dirname+'/../Cloud');
        //         this.instance.Cloud = new cloud(this);
        //     }
        //     return this.instance.Cloud;
        // };
    }

    Middleware(){
        if(!this.instance.Middleware){
            let middleware = require(__dirname+'/middleware.js');
            this.instance.Middleware = new middleware(this);
        }
        return this.instance.Middleware;
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

    Model(model){
        if(!this.instance[model]){
            let m = require(__dirname+'/../Model/'+model+'js');
            this.instance[model] = new m(this);
        }
        return this.instance[model];
    }

}

module.exports = App;