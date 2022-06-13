import { map, range, fromEvent } from 'rxjs';


range(1,5).subscribe(console.log);

range(1,5).pipe(
    
    map(resp=>{
    return resp *10;
    })
    
    ).subscribe(console.log);



const  keyup=fromEvent<KeyboardEvent>(document,'keyup').pipe(
        map<KeyboardEvent,string>(resp=>{
            return resp.key;
        })
    );

keyup.subscribe(val=>{
    console.log(val);
    
});