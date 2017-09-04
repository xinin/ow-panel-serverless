'use strict';

const appLib = require(__dirname + '/lib/App');
const App = new appLib();


module.exports.hello = (req, context, callback) => {

    //TODO ver como hacer un wrapper general para englobar esto aunque sea azure function u otra casa

    const Middleware = App.Middleware();
    Middleware.exec(req);

    const Cloud = App.Cloud();
    // Cloud.Log.info(req, 'Escribiendo info CloudWatch');
    // Cloud.Log.info(req, 'Escribiendo 2 info CloudWatch');
    // Cloud.Log.info(req, {a: 'pepito', b: { c: 1, d: 'tururu'}});


    // Cloud.Log.error(req, 'Escribiendo ERROR CloudWatch');

    //App.Test.Log.info("PRUEBA");


    /*
    const Project = App.Model('Project');
    Project.get(req, 'projectId').then(
        data => {

        }, err => {

        }
    );
*/

    console.log("ANTES DE CONSOLE");

    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Go Serverless v1.0! Your function executed successfully!'
        }),
    };


    console.log("ANTES DE CALLBACK")
    callback(null, response);

    console.log("CALLBACK OK")
    // Use this code if you don't use the http event with the LAMBDA-PROXY integration
    //callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};


