import { Component, OnInit } from '@angular/core';
import { ProductosService, Producto } from '../../services/productos.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss'],
})
export class ListarComponent  implements OnInit {

  productos: Producto[]=[]

  constructor(private productosService:ProductosService) { }

  ngOnInit() {
    this.productosService.getProducto().subscribe(productos =>{
      this.productos = productos;
    })
  }

}
