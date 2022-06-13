import { of, catchError } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';

const url='https://httpbin.org/delay/1';


const manejaError=(resp:AjaxError)=>{
        console.warn('error',resp.message);
        return of({
        ok:false,
        usuarios:[]
        });
        
};

const obs=ajax.getJSON(url);
const obs2=ajax(url);

obs.pipe(
    catchError(manejaError)
    ).subscribe(resp=>{
console.log(resp);

});


obs2.pipe(
    ).subscribe(
    resp=>{
    console.log(resp);
    
    });