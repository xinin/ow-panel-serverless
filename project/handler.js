'use strict';

const appLib = require(__dirname + '/lib/App');


module.exports.hello = (event, context, callback) => {

    const App = new appLib();


    const Cloud = App.Cloud();

    Cloud.Log.info(null, 'Escribiendo info CloudWatch 2');
    Cloud.Log.error(null, 'Escribiendo error CloudWatch 2');

    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Go Serverless v1.0! Your function executed successfully!',
            input: event,
        }),
    };


    callback(null, response);

    // Use this code if you don't use the http event with the LAMBDA-PROXY integration
    //callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
