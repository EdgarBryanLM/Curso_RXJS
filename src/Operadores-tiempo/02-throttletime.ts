import { debounceTime, fromEvent, map, pluck, distinct, distinctUntilChanged, throttleTime, asyncScheduler } from 'rxjs';
const click=fromEvent(document,'keyup');

click.pipe(
    throttleTime(2000)
    );


const input=document.createElement('input');
document.querySelector('body').append(input);


const input$=fromEvent<KeyboardEvent >(input,'keyup');

input$.pipe(
    pluck('target','value'),
    throttleTime(3000,asyncScheduler,{
        leading:true,
        trailing:true
    }),
    distinctUntilChanged()
    ).subscribe(console.log);