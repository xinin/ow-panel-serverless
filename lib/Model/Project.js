'use strict';

class Project{

    constructor(App){
        this.App = App;
    }

    get(req, project){
        return new Promise((resolve, reject)=>{
           let Log = this.App.Cloud().Log; //TODO Hay algo qu eno me gusta, mirar App en vez de funciones atributos
           Log.info(req, `Recuperando información del projecto ${project}`);

           resolve();
        });
    }

}

module.exports = Project;