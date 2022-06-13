import {interval,Observable,timer} from 'rxjs';

const Observer={
    next: resp=>{
        console.log(resp);
        
    },
    error: err=>{
    console.log(err);
    
    },
    complete: ()=>{
    console.log('Completo');
    
    }
}  



const intervalo=interval(1000);

const hoyen5segundos= new Date();
hoyen5segundos.setSeconds(hoyen5segundos.getSeconds()+10);
//intervalo.subscribe(Observer);


const time=timer(2000);
time.subscribe(Observer);



const time2=timer(2000,1000);
time2.subscribe(Observer);


const time3=timer(hoyen5segundos);
time3.subscribe(res=>{
console.log('Tienes una cita programada pendiente');

});


/* const hoy1= new Date();
hoyen5segundos.setSeconds(hoyen5segundos.getSeconds()+10);
const hoy2= new Date();
hoyen5segundos.setSeconds(hoyen5segundos.getSeconds()+15);
const hoy3= new Date();
hoyen5segundos.setSeconds(hoyen5segundos.getSeconds()+20);

var fechas=[hoy1,hoy2,hoy3];
        var timer4;
 
        for (let i = 0; i < fechas.length; i++) {
           var timer=timer(fechas[i]);
            timer4.subscribe(res=>{
                console.log('cita');
                
                });
        } */
    
