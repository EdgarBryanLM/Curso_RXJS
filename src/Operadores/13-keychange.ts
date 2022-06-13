import {  from, distinctUntilChanged, distinctUntilKeyChanged } from 'rxjs';



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
    
    distinctUntilKeyChanged('name')
    ).subscribe(console.log);


