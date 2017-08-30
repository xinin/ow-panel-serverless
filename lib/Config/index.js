'use strict';

const Config = {
    env: 'lambda-dev',
    cloud: 'aws',
    cloudwatch : {
        infoLog: '/ow/panel/info',
        errorLog: '/ow/panel/error'
    }
};

module.exports = Config;
