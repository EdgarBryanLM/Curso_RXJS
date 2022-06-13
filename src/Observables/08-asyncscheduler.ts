import {asyncScheduler} from 'rxjs'

const saludar =nombre=>console.log('Hola Mundo',nombre);


asyncScheduler.schedule(saludar,2000,{a:'Edgar'});



asyncScheduler.schedule(function(state){
    console.log(state);
    
    this.schedule(state+1,1000);
},2000,0);