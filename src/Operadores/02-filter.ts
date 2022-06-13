import { from, range, fromEvent, map } from 'rxjs';
import {filter} from'rxjs/operators'


interface ejercicio{
    tipo:string
    nombre:string

}

range(1,10).pipe(
    filter(val=> val %2===1)
    ).subscribe(console.log);



 range(1,10).pipe(
    filter((val,i)=>{
       console.log(i);
       return val %2===1;
    })
    ).subscribe(console.log);   

    const personaje:ejercicio []=[
    {
        tipo:'heroe',
        nombre:'goku'
    },
    {
        tipo:'villano',
        nombre:'frezeer'
    },
    {
        tipo:'heroe',
        nombre:'goku'
    }
    
    ];


    

        from(personaje).pipe(
            filter(val=>{return val.tipo==='heroe'})
        ).subscribe(console.log);



     const keyup=fromEvent(document,'keyup').pipe(
            map((res:any)=>{
            return res.key;
            }),
            filter((res:any)=>{
            return res==="Enter"
            })
        );


     keyup.subscribe(console.log);

