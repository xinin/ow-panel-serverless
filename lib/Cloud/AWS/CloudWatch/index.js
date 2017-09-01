'use strict';

const Log = require(__dirname + '/../../Common/Log');
const lawgs = require('lawgs');
lawgs.config({
    aws: {region: 'eu-west-1'}
});

class CloudWatch extends Log {

    constructor(App) {
        super(App);
        // const AWS = require("aws-sdk");
        // AWS.config.update({region: "eu-west-1"});
        //
        // this.CWLogs = new AWS.CloudWatchLogs();
    }

    info(req, message) {
        let config = this.App.Config();
        if (config.debug) console.log(message);
        this.writeLog(req, message, config.cloudwatch.infoLogGroup);
    }

    error(req, message) {
        let config = this.App.Config();
        if (config.debug) console.log(message);
        this.writeLog(req, message, config.cloudwatch.errorLogGroup);
    }

    writeLog(req, message, logGroupName){
        var logger  = lawgs.getOrCreate(logGroupName);
        logger.log(req.uniqid, message);
    }

    // createLogStream(req, logGroupName) {
    //     return new Promise((resolve, reject) => {
    //         this.describeLogStream(req, logGroupName, req.uniqid).then(
    //                 data => {
    //                     if(data.logStreams.length){
    //                         resolve();
    //                     } else {
    //                         const params = {
    //                             logGroupName,
    //                             logStreamName: req.uniqid
    //                         };
    //
    //                         this.CWLogs.createLogStream(params, function (err) {
    //                             (err)? reject(err) : resolve();
    //                         });
    //                     }
    //                 }, err =>{
    //                     console.log("ERR", err);
    //                 }
    //             );
    //         });
    // }
    //
    // describeLogStream(req, logGroupName, logStreamName){
    //     return new Promise((resolve, reject)=>{
    //         let params = {
    //             logGroupName,
    //             limit: 1,
    //             logStreamNamePrefix: logStreamName
    //         };
    //         this.CWLogs.describeLogStreams(params, function(err, data) {
    //             if (err) reject(err); // an error occurred
    //             else     resolve(data);           // successful response
    //         });
    //     });
    // }
    //
    //
    // writeLog(req, message, logGroupName) {
    //
    //     const $this = this;
    //
    //     function putLogEvents(req, message, logGroupName) {
    //         let timestamp = new Date().getTime();
    //
    //         let params = {
    //             logEvents: [
    //                 {
    //                     message,
    //                     timestamp
    //                 },
    //             ],
    //             logGroupName,
    //             logStreamName: req.uniqid
    //             // sequenceToken: 'STRING_VALUE'
    //         };
    //         $this.CWLogs.putLogEvents(params, function (err) {
    //             if (err){//TODO MIRAR ALERTAS
    //                 console.log("ERROR: putLogEvents", JSON.stringify(err));
    //                 console.log("Log Message: ", JSON.stringify(message))
    //             }
    //         });
    //     }
    //
    //     if(req.logStreamCreated){
    //         putLogEvents(req, message, logGroupName);
    //     } else {
    //         this.createLogStream(req, logGroupName).then(
    //             ()=>{
    //                 putLogEvents(req, message, logGroupName);
    //             }, err => { //TODO mirar alertas
    //                 console.log("ERROR: createLogStream", JSON.stringify(err));
    //                 console.log("Log Message: ", JSON.stringify(message))
    //             }
    //         );
    //     }
    // }


}

module.exports = CloudWatch;