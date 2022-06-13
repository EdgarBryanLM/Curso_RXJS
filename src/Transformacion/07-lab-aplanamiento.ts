import { fromEvent, tap, map, mergeMap, pluck, catchError, of, switchMap } from 'rxjs';
import { ajax } from 'rxjs/ajax';

//Auxiliar

const peticionHttpLogin=(login)=>{

  return ajax.post('https://reqres.in/api/login?delay=1',login).pipe(
  
  pluck('response','token'),
  catchError(err=> of(err))
  )
};


//Creando un formulario
const form=document.createElement('form');
const input=document.createElement('input');
const pass=document.createElement('input');
const submitt=document.createElement('button');

//configuraciones
input.type='email';
input.placeholder='Email';
input.value='eve.holt@reqres.in';

pass.type='password'
pass.placeholder='Password';
pass.value='cityslicka';


submitt.innerHTML='Ingresar';


form.append(input,pass,submitt);

document.querySelector('body').append(form);

//Streams

const submitf=fromEvent(form,'submit').pipe(
    tap(ev=>ev.preventDefault()),
    map(ev=>({
      email:ev.target[0].value,
      password:ev.target[1].value
    })),
    switchMap(peticionHttpLogin)
  );


  submitf.subscribe(token=>{
    console.log(token);
  });

