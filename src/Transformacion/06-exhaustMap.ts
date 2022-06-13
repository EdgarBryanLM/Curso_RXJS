import { interval, take, fromEvent, switchMap, concatMap, exhaustMap } from 'rxjs';
const inter=interval(500).pipe(take(3));
const click=fromEvent(document,'click');

click.pipe(
  exhaustMap(()=>inter)
  ).subscribe(console.log);