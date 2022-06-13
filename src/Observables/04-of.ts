import {of} from 'rxjs';

const obs=of(1,2,3,4,5,6);

obs.subscribe(res=>{
console.log(res);
if(res===4){
console.log('hello word');

}


},
null,
()=> console.log('fin')

);