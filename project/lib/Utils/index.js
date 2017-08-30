'use strict';

const jsonlib = require('circular-json');


class Utils {

    sayHello(){
        console.log("HELLO!")
    }

    stringify(obj) {
        return (obj instanceof Error) ? obj.toString() : jsonlib.stringify(obj);
    }

    apiRequest (req, path, params, method, data, customOptions){
        return new Promise((resolve, reject)=>{


        });
    }


    getLogObj (req) {
        if(!req) return {};
        try {
            let msg = {};
            if(req.body && typeof req.body === 'object'){
                let b = Utils.stringify(req.body);
                msg.body = (b.length > 1000) ? 'too large' : b;
            } else if(req.body) {
                msg.body = (req.body.length > 1000) ? 'too large' : req.body;
            }
            if(req.utils) {
                msg.uid = req.utils.uid;
                if (req.originalUrl) {
                    msg.url = req.originalUrl;
                }
                if (req.utils.ip) {
                    msg.ip = req.utils.ip;
                }
            }
            try{
                msg.user = req.user.profile;
            }catch(e){
                msg.user = 'not-logged';
            }
            return msg;
        } catch(e) {
            return {};
        }
    }

}

module.exports = Utils;