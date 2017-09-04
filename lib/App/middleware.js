'use strict';

class Middleware {

    constructor(App){
        this.App = App;
    }

    exec(req){
        if(!req.uniqid){
            if(req.headers && req.headers.uniqid){ //No esta ni probado el tema de paso de uniqid en headers para tener trazas entre servicios
                req.uniqid = req.headers.uniqid;
            } else {
                let Utils = this.App.Utils();
                req.uniqid = Utils.uniqid();
            }
        }
    }



}

module.exports = Middleware;
