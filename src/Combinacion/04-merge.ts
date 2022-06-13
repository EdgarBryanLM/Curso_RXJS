import { fromEvent, interval, merge } from "rxjs";


const keyup=fromEvent(document,'keyup');
const click=fromEvent(document,'click');


merge(keyup,click).subscribe(resp=>{
console.log(resp);
});