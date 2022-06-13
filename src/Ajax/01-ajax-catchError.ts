import {ajax, AjaxError} from 'rxjs/ajax'
import { catchError, map, of } from 'rxjs';

const url='https://api.github.com/users?per_page=5';

const errores=(response:Response)=>{
        if(!response.ok){
            throw new Error(response.statusText)
        }
        return response;
};

const fetchpromesa=fetch(url);

/* fetchpromesa
    .then(errores)
    .then(resp=>{
    resp.json().then(res=>{
        console.log(res);
    })

}).catch(err=>{console.log(err);
});
 */

ajax(url).pipe(
    map(resp=>resp.response),
    catchError((err:AjaxError) =>{
    console.warn('error',err);
    return of([])
    })
).subscribe(console.log);