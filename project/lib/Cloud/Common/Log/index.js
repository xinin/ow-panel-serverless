'use strict';

class Log {

    constructor(App){
        this.App = App;
    }

    info(req, message){
        throw new Error('Function Log.info not implemented');
    }

    error(req, message){
        throw new Error('Function Log.error not implemented');
    }


}

module.exports = Log;