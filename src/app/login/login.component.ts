import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mensaje: String = 'Inicio de session';
  correo: String = 'Correo electronico';
  mnsContrasena:string='Contraseña';
  btnMensaje: String = 'Login';

  constructor(private loginService: LoginService, private router:Router) { }

  ngOnInit() {
    // this.loginService.login('cristo@pepe.com', 'pepe123343').subscribe(
    //   res => {
    //     console.log(res);
    //   });

  }

  login(correo:string,password:string,event:Event){
    console.log(correo);
    event.preventDefault();
    this.loginService.login(correo,password).subscribe(
      res => {
        console.log(res);
        this.navigate();
      },
      error=>{
        console.log(error);
      }

      );
  };

  navigate(){
    this.router.navigateByUrl('/home');
  };
   

}
