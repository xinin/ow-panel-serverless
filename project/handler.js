'use strict';

const appLib = require(__dirname + '/lib/App');
const App = new appLib();



module.exports.hello = (req, context, callback) => {

    const Middleware = App.Middleware();
    Middleware.exec(req);

    const Cloud = App.Cloud();

    Cloud.Log.info(req, 'Escribiendo info CloudWatch');
    Cloud.Log.info(req, 'Escribiendo 2 info CloudWatch');

    Cloud.Log.error(req, 'Escribiendo error CloudWatch');

    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Go Serverless v1.0! Your function executed successfully!',
            input: req,
        }),
    };


    callback(null, response);

    // Use this code if you don't use the http event with the LAMBDA-PROXY integration
    //callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
