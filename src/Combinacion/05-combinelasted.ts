import { combineLatest, fromEvent, interval, merge, pluck } from 'rxjs';

/* Combina los dos observables */
/* const keyup=fromEvent<KeyboardEvent>(document,'keyup');
const click=fromEvent<PointerEvent>(document,'click');


combineLatest(
    keyup.pipe(pluck('key'))
    ,click.pipe(pluck('x'))
    ).subscribe(resp=>{
console.log(resp);
});
 */

const input1=document.createElement('input');
const input2=document.createElement('input');

input1.placeholder='email@gmail.com';
input2.placeholder='****';
document.querySelector('body').append(input1,input2);

//Helper

const getInput=(elem:HTMLElement)=>{
    return fromEvent(elem,'keyup').pipe(pluck('target','value'))
}



combineLatest(
    getInput(input1),
    getInput(input2)
    ).subscribe(val=>{
    console.log(val);
    });