import { fromEvent, Observer } from 'rxjs';


// Eventos del Dom

const src1=fromEvent(document,'click');

const src2=fromEvent<KeyboardEvent>(document,'keyup');


const observer={
    next:res =>{
    console.log(res);
    
    },
    error:err=>{
    console.log(err);
    
    },
    complete:()=>{
    
    }
}


src1.subscribe(observer);

src2.subscribe(res=>{
console.log(res.key);

});

src2.subscribe(({key})=>{
    console.log(key);
    
    });