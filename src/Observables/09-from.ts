import {of,from} from 'rxjs';


// of = toma argumentos y genera una secuencia de valores

//from= crea un observable atravez de un array,promise,iterable, observable


const observer={
    next:        value=>{console.log('next(): ',value);},
    error:       err=>{console.warn('error(): ',err)},
    complete:    ()=>{console.log('Compleado')}
};

const src= from([1,2,3,4,5,6]);


src.subscribe(observer);



const src2= from(fetch('https://api.github.com/users/klerith'));


src2.subscribe(observer);

src2.subscribe(async (resp)=>{
 const dataResp= await resp.json();

 console.log(dataResp);
 
});