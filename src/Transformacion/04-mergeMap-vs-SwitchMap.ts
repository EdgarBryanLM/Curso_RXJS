import { fromEvent, interval, mergeMap, switchMap } from 'rxjs';
const click=fromEvent(document,'click');
const inter=interval(1000);

click.pipe(
  switchMap(()=>inter)
  ).subscribe(console.log);