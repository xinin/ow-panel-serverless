'use strict';

const Config = {
    env: 'lambda-dev',
    cloud: 'aws',
    debug: true,
    cloudwatch : {
        infoLogGroup: '/ow/panel/info',
        errorLogGroup: '/ow/panel/error'
    }
};

module.exports = Config;
