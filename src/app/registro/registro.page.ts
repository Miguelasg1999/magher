import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(private aService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  logout(){
    this.aService.logout();
    alert("Sesión cerrada");
    this.router.navigate(["/inicio"]);
  }

}
