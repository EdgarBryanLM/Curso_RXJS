import {Observable, Observer} from 'rxjs'


const observer:Observer<any>={
        next:        value=>{console.log('next(): ',value);},
        error:       err=>{console.warn('error(): ',err)},
        complete:    ()=>{console.log('Compleado')}
};

//const obs=Observable.create();
const obs= new Observable<string>(sups =>{
//El next envia datos a las suscripciones
        sups.next('Hola');
        sups.next('Hola2');
        sups.next('Hola3');

//Forzando un error
/*         const a = undefined;
        a.nombre='fernado'; */

//Termina el envio de datos a las suscripciones
        sups.complete();

});;


obs.subscribe(
//Imprime el valor de next()
    resp=>{
        console.log('next: ',resp);    
    },
//Imprime el valor de error()
    err=>{
        console.warn('error',err);
    },
//Imprime el valor de complete()
    ()=>{
        console.info('Completado');
        
    }
);


obs.subscribe(observer);
