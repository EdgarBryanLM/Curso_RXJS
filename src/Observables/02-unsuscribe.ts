import {Observable, Observer} from 'rxjs'


const observer:Observer<any>={
        next:        value=>{console.log('next(): ',value);},
        error:       err=>{console.warn('error(): ',err)},
        complete:    ()=>{console.log('Compleado')}
};

let cont:number=0;

const intervalo= new Observable<number>(suscrip=>{
    
    setInterval(()=>{
    cont=cont+1;
    suscrip.next(cont);
    if(cont>=10){
        console.log('completado');
        
    suscrip.complete();
    }
    },1000);

   
});


intervalo.subscribe(resp=>{
    console.log(resp);
    
});

