import { distinct, of, from, distinctUntilChanged } from 'rxjs';

const numeros=of(1,1,2,1,3,3,3,2,2,5,6,1);


numeros.pipe(
    distinctUntilChanged()
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
    
    distinctUntilChanged((ant,act)=>ant.name===act.name)
    ).subscribe(console.log);