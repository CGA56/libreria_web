import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mensaje: string = 'Inicio de session';
  correo: string = 'Correo electronico';
  mnsContrasena: string = 'Contraseña';
  btnMensaje: string = 'Login';
  loginOut: string ='disabled';

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    // this.loginService.login('cristo@pepe.com', 'pepe123343').subscribe(
    //   res => {
    //     console.log(res);
    //   });

  }


  login(correo: string, password: string, event: Event) {
    console.log(correo);
    event.preventDefault();
    this.loginService.login(correo, password).subscribe(
      res => {
        this.loginService.setToken(res.token);
        if ( this.loginService.getToken()) {
          this.loginOut = ('');
          this.navigate('/dashboard');
        }
      },
      error => {
        this.navigate('');
        console.log(error);
      }

    );
  };

  navigate(url:string) {
    this.router.navigateByUrl(url);
  };


}
