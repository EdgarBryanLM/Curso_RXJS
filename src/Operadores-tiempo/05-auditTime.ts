import { auditTime, fromEvent, map } from 'rxjs';


const click=fromEvent<PointerEvent>(document,'click');
//Emite el ultimo valor que emita el observer en un rango de 2segundos

//emite a,c,b,d    obtiene d
click.pipe
    (
        map(({x})=>x),
    auditTime(2000)
    ).subscribe(console.log);