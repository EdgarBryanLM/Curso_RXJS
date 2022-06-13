import { fromEvent, debounceTime, pluck, map, mergeAll, Observable, mergeMap, switchMap } from 'rxjs';
import { ajax } from 'rxjs/ajax';
const body= document.querySelector('body');
const textInput=document.createElement('input');
const orderlist=document.createElement('ol');
body.append(textInput,orderlist);


const input=fromEvent<KeyboardEvent>(textInput,'keyup');

input.pipe(
    debounceTime(500),
    pluck('target','value'),
    mergeMap<any,Observable<any>>(val=>{
    return ajax.getJSON(`https://api.github.com/search/users?q=${val}`)
    }),
    pluck('items')
    ).subscribe({
    next:resp=>{
      /* console.log(resp); */
        
    }
});



const url='https://httpbin.org/delay/1?arg=';

input.pipe(
    pluck('target','value'),
    switchMap<any,Observable<any>>(val=>{
    return ajax.getJSON(url+val)
    })
    ).subscribe({
    next:resp=>{
      console.log(resp);
        
    }
});