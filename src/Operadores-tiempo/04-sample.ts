import { interval, fromEvent, sample } from 'rxjs';

const interv=interval(500);

const click=fromEvent(document,'click');

interv.pipe(
    sample(click)
    ).subscribe(console.log);