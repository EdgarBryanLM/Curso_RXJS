import { concat, interval, take } from 'rxjs';

const inter= interval(1000);


//Concatena observables cuando se completa una se empieza a ejecutar el otro 
concat(
    inter.pipe(take(3)),
    inter.pipe(take(3)),
    inter.pipe(take(1))
    ).subscribe(console.log);