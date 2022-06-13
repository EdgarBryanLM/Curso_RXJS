import { debounceTime, fromEvent, map, pluck, distinct, distinctUntilChanged } from 'rxjs';
const click=fromEvent(document,'keyup');

click.pipe(
    debounceTime(2000)
    ).subscribe(console.log);


const input=document.createElement('input');
document.querySelector('body').append(input);


const input$=fromEvent<KeyboardEvent >(input,'keyup');

input$.pipe(
    pluck('target','value'),
    debounceTime(1000),
    distinctUntilChanged()
    ).subscribe(console.log);