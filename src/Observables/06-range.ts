import {asyncScheduler, of, range} from 'rxjs';


const src= of(1,2,3,4,5,6);
src.subscribe(console.log);



const src2= range(1,20);
src2.subscribe(console.log);


const src3 = range(1,20,asyncScheduler);
src3.subscribe(console.log);