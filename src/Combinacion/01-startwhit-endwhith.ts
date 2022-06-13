import { endWith, of, startWith } from "rxjs";

const numeros=of(1,2,3).pipe(
    startWith('A','B','C'),
    endWith('X','Y','Z')
    );

numeros.pipe(
    
    ).subscribe({
    next:val=>{
    console.log(val);
    },
    complete:()=>{
    console.log('Completado');
    
    }
    });