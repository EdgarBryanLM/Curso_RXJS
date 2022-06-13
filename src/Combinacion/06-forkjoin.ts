import { of, interval, take, delay, forkJoin } from 'rxjs';


const numeros=of(1,2,3,4);

const inter=interval(1000).pipe(take(3));

const letras=of('a','b','c').pipe(delay(3500));

/* const convinacion=forkJoin(numeros,inter,letras).subscribe(
    resp=>{
    console.log('numeros',resp[0]);
    console.log('intervalo',resp[1]);
    console.log('letras',resp[2]);

    }); */

    const convinacion=forkJoin({num:numeros,inter:inter,let:letras}).subscribe(
        resp=>{
        console.log(resp);
        
    
        });