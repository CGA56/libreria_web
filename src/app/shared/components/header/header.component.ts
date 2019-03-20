import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  linkNameHome: string = 'Home';
  linkNameDashboard: string = 'Dashboard';
  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

  isLogin(): boolean {
    let bandera = false;
    bandera = this.loginService.getToken() != undefined;
    return bandera;
  }

  logoOut(): void {
    this.loginService.logOut();
  }

  getUserName():string{
    return this.loginService.getUserName();
  }

}
