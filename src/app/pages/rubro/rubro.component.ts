import { Component, OnInit, inject } from '@angular/core';
import { HeaderService } from '../../shared/services/header.service';
import { CategoriaService } from '../../shared/services/categoria.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../../shared/interfaces/producto.interface';
import { Categoria } from '../../shared/interfaces/categoria.interface';

@Component({
  selector: 'app-rubro',
  templateUrl: './rubro.component.html',
  styleUrl: './rubro.component.css'
})
export class RubroComponent implements OnInit {
  productos: Producto[] = []

  constructor(
    private headerService: HeaderService,
    private categoriaService: CategoriaService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {

  }
  
  ngOnInit(): void {
    const id = +this.activateRoute.snapshot.params['id'];
    console.log(id)
    this.categoriaService.getByCategoria(id).subscribe((categoria: Categoria) => {
      this.headerService.titulo.set(categoria.nombre);
      this.productos = categoria.productos;
    });
  }

  details(id: number) {
    this.router.navigate([`/articulo/${id}`])
  }
}
