import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
 

@Injectable()
export class LoginService {
    
    constructor(private http: HttpClient) { }

    login(email:string, password:string):Observable<any>{
       console.log(email);
        return this.http.post('http://localhost:3000/login',{
           correo: email,
           password: password,
        });
        
    }
    

}