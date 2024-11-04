import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registar-usuario',
  templateUrl: './registar-usuario.component.html',
  styleUrls: ['./registar-usuario.component.scss'],
})
export class RegistarUsuarioComponent  implements OnInit {

  email:string = "";
  password:string = "";

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {}
  
  async register(){
    try{
      await this.authService.register(this.email, this.password);
      alert("Registrado correctamente" + this.email);
      this.router.navigate(["/inicio"]);
    }catch(error){
      alert("Error al registrarse" + error);
    }
  }

}
