'use strict';

class Middleware {

    constructor(App){
        this.App = App;
    }

    exec(req){
        if(!req.uniqid){
            let Utils = this.App.Utils();
            req.uniqid = Utils.uniqid();
        }

    }

}

module.exports = Middleware;
