import { range, tap, map } from 'rxjs';
const numeros= range(1,5);

numeros.pipe(
    
    tap(x=>console.log('antes',x)),
    map(resp=>{resp*10}),
    tap({
        next:balor=>{console.log(balor);},
        complete:()=>{console.log('complete');
        }
    })
    
    ).subscribe(res=>{
    console.log('suscripcion:',res);
    
});