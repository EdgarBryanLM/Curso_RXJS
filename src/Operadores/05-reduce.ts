import { interval, reduce, take } from "rxjs";

const total=(acumulador:number,valorActual:number)=>{
    return acumulador+valorActual;
}


interval(1000).pipe(

    take(3),
    reduce(total)
)
.subscribe(resp=>{
    console.log(resp);
    
},
error=>{
},

()=>{
    console.log('completado');
    
}

);