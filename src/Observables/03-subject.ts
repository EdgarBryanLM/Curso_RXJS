

import {Observable, Observer, Subject} from 'rxjs'
import { MultiCompiler } from 'webpack';


const observer:Observer<any>={
        next:        value=>{console.log('next(): ',value);},
        error:       err=>{console.warn('error(): ',err)},
        complete:    ()=>{console.log('Compleado')}
};



const intervalo= new Observable<number>(subs=>{

 const intervaloIs = setInterval(()=>subs.next(Math.random()),1000);

 return()=>clearInterval(intervaloIs);
});

/* Propiedades del Subject
1- casteo MultiCompile
2- tambien es un observer
3- next, error y complete */
const subjet= new Subject();

const Subscripcion=intervalo.subscribe(subjet);


const subs1=subjet.subscribe(observer);
const subs2=subjet.subscribe(observer); 


setTimeout(()=>{

    subjet.next(10);
    subjet.complete();
    Subscripcion.unsubscribe();
},3500);