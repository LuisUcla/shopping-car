import { Component, OnInit, inject, signal } from '@angular/core';
import { HeaderService } from '../../shared/services/header.service';
import { Busqueda } from '../../shared/interfaces/busqueda.interface';
import { ProductoService } from '../../shared/services/producto.service';
import { Producto } from '../../shared/interfaces/producto.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrl: './buscar.component.css'
})
export class BuscarComponent implements OnInit {
  productos: Producto[] = [];
  data: Producto[] = [];
  cargando = signal(true);
 
  headerService = inject(HeaderService);
  productoService = inject(ProductoService);
  router = inject(Router)

  parametrosBusqueda: Busqueda = {
    texto: '',
    aptoCeliaco: false,
    aptoVegano: false
  }
  
  ngOnInit(): void {
    this.headerService.titulo.set('Buscar articulo');
    this.getAll() // todos los productos
  }

  getAll() {
    this.cargando.set(true);
      this.productoService.getAll().subscribe(data => {
        data.forEach((element: any) => {
          for (let el of element) {
            this.data = [...this.data, el];
            this.productos = [...this.productos, el]
          }
        });
        this.cargando.set(false);
      });
  }

  buscar() {
    this.productos = this.data.filter(producto => {
      if (this.parametrosBusqueda.aptoCeliaco && !producto.esCeliaco) return false; // el valor no entra
      if (this.parametrosBusqueda.aptoVegano && !producto.esVegano) return false; // el valor no entra
      
      const busquedaTitulo = producto.nombre.toLowerCase().includes(this.parametrosBusqueda.texto.toLowerCase())
      
      if (busquedaTitulo) return true;
      
      for (let i = 0; i < producto.ingredientes.length; i++) {
        const ingrediente = producto.ingredientes[i];
        
        if (ingrediente.toLowerCase().includes(this.parametrosBusqueda.texto.toLowerCase())) {
          return true
        }
        
      }
      return false;
    });
  }

  details(id: number) {
    this.router.navigate([`/articulo/${id}`])
  }
}
