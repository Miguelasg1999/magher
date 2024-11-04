import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {

  constructor(private aService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  logout(){
    this.aService.logout();
    alert("Sesión cerrada");
    this.router.navigate(["/inicio"]);
  }


}
