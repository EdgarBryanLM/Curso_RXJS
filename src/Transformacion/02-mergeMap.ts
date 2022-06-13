import { interval, mergeMap, of, take, map, fromEvent, takeUntil } from 'rxjs';



const letras=of('a','b','c');

letras.pipe(
    mergeMap(letra=> interval(1000).pipe(
        map(i=>letra+i),
        take(3)))
    ).subscribe({
    next:resp=>{
    console.log(resp);
    },
    complete:()=>{
    console.log('Completado');
    }

});


const mouseDown=fromEvent(document,'mousedown');
const mouseUp=fromEvent(document,'mouseup');
const inter=interval();

mouseDown.pipe(
    
    mergeMap(()=>inter.pipe(
        takeUntil(mouseUp)
        ))
    
    ).subscribe(console.log);