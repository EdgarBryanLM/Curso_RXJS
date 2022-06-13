import { map, range, fromEvent, pluck, mapTo } from 'rxjs';


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


const  keyupPluck=fromEvent<KeyboardEvent>(document,'keyup').pipe(
            pluck('key')
);

keyupPluck.subscribe(val=>{
    console.log(val);
    
});


const  mapto=fromEvent<KeyboardEvent>(document,'keyup').pipe(
    mapTo(true)
);


mapto.subscribe(val=>{
    console.log(val);
    
});