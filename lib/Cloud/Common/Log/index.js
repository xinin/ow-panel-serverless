'use strict';

class Log {

    constructor(App){
        this.App = App;
    }

    info(req, message){
        let config = this.App.Config();
        if(config.debug) console.log(message);
    }

    error(req, message){
        let config = this.App.Config();
        if(config.debug) console.log(message);
    }


}

module.exports = Log;