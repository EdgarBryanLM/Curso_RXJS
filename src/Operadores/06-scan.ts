import { interval, reduce, scan, take } from "rxjs";

const total=(acumulador:number,valorActual:number)=>{
    return acumulador+valorActual;
}


//Funciona de la misma manera que el reduce, con la dierencia que scan
//manda el valor acumulado en cada emision. El reduce lo manda hasta el final en un unica emision
interval(1000).pipe(

    take(3),
    scan(total)
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