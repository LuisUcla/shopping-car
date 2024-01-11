import { Component, OnInit, inject, signal } from '@angular/core';
import { HeaderService } from '../../shared/services/header.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from '../../shared/services/producto.service';
import { Producto } from '../../shared/interfaces/producto.interface';
import { CarService } from '../../shared/services/car.service';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrl: './articulo.component.css'
})
export class ArticuloComponent implements OnInit {

  productos: any[] = []
  producto?: Producto
  id: number = 0
  cantidad = signal(1);
  notas = '';

  constructor(
    private headerService: HeaderService,
    private activateRoute: ActivatedRoute,
    private productoService: ProductoService,
    private cartService: CarService,
    private router: Router
  ) {}
  
  ngOnInit(): void {
    this.id = +this.activateRoute.snapshot.params['id'];
    

   this.getData();
   
  }
  
  getData() {
    this.productoService.getAll().subscribe(data => {
      data.forEach((element: any) => {
        
        for (let el of element) {
          this.productos = [...this.productos, el]
        }

      });

      this.getById(this.id)
    });
  }

  getById(id: number) {
    this.producto = this.productos.find(art => +art.id === id);
    this.headerService.titulo.set(this.producto!.nombre)
  }

  agregarProducto() { // agrega producto al Carrrito
    if (!this.producto) {
      return;
    }

    console.log(this.notas)
    this.cartService.agregarProducto(+this.producto?.id, this.cantidad(), this.notas);

    // navegar
    this.router.navigate(['/carrito']);
  }

}
