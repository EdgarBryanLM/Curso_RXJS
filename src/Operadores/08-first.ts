import { first, fromEvent } from 'rxjs';
const click=fromEvent<PointerEvent>(document,'click');

click.pipe(
    first(event=> event.clientY>=150)
    ).subscribe({
    next:val=>{
    console.log(val);
    },
    complete:()=>{
    console.log('complete!!');
    
    }
});