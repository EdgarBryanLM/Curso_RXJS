import { interval, take, fromEvent, switchMap, concatMap } from 'rxjs';
const inter=interval(500).pipe(take(3));
const click=fromEvent(document,'click');

click.pipe(
  concatMap(()=>inter)
  ).subscribe(console.log);