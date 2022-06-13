import { catchError, forkJoin, of } from 'rxjs';
import { ajax } from "rxjs/ajax";


const git_api_url='https://api.github.com/users/';
const gitUser='EdgarBryanLM';

forkJoin(
    {
    usuario:ajax.getJSON(git_api_url+gitUser),
    respos:ajax.getJSON(git_api_url+gitUser+'/repos'),
    gits:ajax.getJSON(git_api_url+gitUser+'/gists')
    }
    
    ).pipe(
        catchError(err=>of(err))
        ).subscribe(console.log);