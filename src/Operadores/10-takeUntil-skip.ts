import { interval, fromEvent, takeUntil, skip } from 'rxjs';

const boton=document.createElement('button');
boton.innerHTML='Detener boton';
document.querySelector('body').append(boton);


const counter=interval(1000);

const click=fromEvent(boton,'click').pipe(
    skip(1)
    );

counter.pipe(
    
    takeUntil(click)
)
.subscribe({
    next:val=>{
    console.log(val);
    },
    complete:()=>{
    
    console.log('completado');
    }
})