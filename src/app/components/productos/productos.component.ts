import { Component, OnInit } from '@angular/core';
import { ProductosService, Producto } from '../../services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent  implements OnInit {

  producto:Producto = {nombre:"", descripcion:"", precio:0, imageUrl:""}

  constructor(private productoService: ProductosService) { }

  ngOnInit() {}

  addProducto(){
    this.productoService.addProducto(this.producto).then(()=>{
      alert("Se ha agregado correctamente el producto")
      this.producto = {nombre:"", descripcion:"", precio:0, imageUrl:""}
    }).catch(error=>{alert("Error al agregar producto" + error)})
    
  }

}
