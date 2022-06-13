import { fromEvent, debounceTime, pluck, map, mergeAll, Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';
const body= document.querySelector('body');
const textInput=document.createElement('input');
const orderlist=document.createElement('ol');
body.append(textInput,orderlist);


const input=fromEvent<KeyboardEvent>(textInput,'keyup');

input.pipe(
    debounceTime(500),
    pluck('target','value'),
    map<any,Observable<any>>(val=>{
    return ajax.getJSON(`https://api.github.com/search/users?q=${val}`)
    }),
    mergeAll(),
    pluck('items')
    ).subscribe({
    next:resp=>{
      console.log(resp);
        
    }
});