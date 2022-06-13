import { startWith } from 'rxjs';
import { ajax } from 'rxjs/ajax';
const loadinf=document.createElement('div');
loadinf.classList.add('loading');
loadinf.innerHTML='Cargando';

const body=document.querySelector('body');


ajax.getJSON('https://reqres.in/api/users/2?delay=3').pipe(
    startWith(true)
).subscribe(resp=>{

if(resp===true){
    body.append(loadinf);
}else{
document.querySelector('.loading').remove();
}

console.log(resp);
})