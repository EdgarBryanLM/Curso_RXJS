import { distinct, of, from } from 'rxjs';

const numeros=of(1,1,1,3,3,3,2,2,5,6);


numeros.pipe(
    distinct()
    ).subscribe(console.log);



interface personaje{
name:string
}

const personajes:personaje[]=[
        {
        name:'hulk'
        },
        {
        name:'goku'
        },
        {
        name:'goku'
        },
        {
        name:'vegueta'
        },
        {
         name:'pikachu'
        }
];

from(personajes).pipe(
    
    distinct(p=>p.name)
    ).subscribe(console.log);