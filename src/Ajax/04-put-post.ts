import {ajax} from 'rxjs/ajax';

const url='https://httpbin.org/delay/1';


ajax.get(url,{'token':'ASDDSS'});

ajax.post(url,{nombre:'edgar'},{'token':'SDFSDFS'}).subscribe(
    {
        next:(resp)=>{
        console.log(resp);
        }
    }
    );

ajax({
    url:url,
    method:'GET',
    headers:{
    'token':'asfjasjf'
    }
}).subscribe(console.log);