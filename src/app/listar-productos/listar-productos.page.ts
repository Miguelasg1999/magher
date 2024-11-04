import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.page.html',
  styleUrls: ['./listar-productos.page.scss'],
})
export class ListarProductosPage implements OnInit {

  constructor(private aService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  logout(){
    this.aService.logout();
    alert("Sesión cerrada");
    this.router.navigate(["/inicio"]);
  }

}
