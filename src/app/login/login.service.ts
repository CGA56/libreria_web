import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import * as jw_decode from 'jwt-decode';


@Injectable()
export class LoginService {

    url: string = 'http://localhost:3000/login';

    constructor(private http: HttpClient) { }

    login(email: string, password: string): Observable<any> {
        console.log(email);
        return this.
            http.post(this.url, {
                correo: email,
                password: password,
            });

    }


    logOut(): void {

        localStorage.removeItem('token_session');
        localStorage.removeItem('user_name');
    }

    getUserName(): string {
        return localStorage.getItem('user_name');
    }

    getToken(): string {
        return localStorage.getItem('token_session');
    }

    setToken(token_session: string): void {
        const decode = jw_decode(token_session);
        let userName = decode.usuario.nombre;
        console.log(decode.usuario);
        localStorage.setItem('user_name', userName);
        localStorage.setItem('token_session', token_session);
    }

    getTokenExpirationDate(token_session: string): Date {
        const decoded = jw_decode(token_session);
        if (decoded.exp === undefined) return null;
        const date = new Date(0);
        date.setUTCSeconds(decoded.exp);
        return date;
    }


    isTokenExpired(token_session?: string): boolean {
        if (!token_session) token_session = this.getToken();
        if (!token_session) return true;

        const date = this.getTokenExpirationDate(token_session);
        if (date === undefined) return false;
        return !(date.valueOf() > new Date().valueOf());
    }






}