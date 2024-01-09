import { Component, OnInit, inject } from '@angular/core';
import { HeaderService } from '../../shared/services/header.service';
import { CategoriaService } from '../../shared/services/categoria.service';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '../../shared/interfaces/producto.interface';

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
    private activateRoute: ActivatedRoute
  ) {

  }
  
  ngOnInit(): void {
    const id = +this.activateRoute.snapshot.params['id'];
    
    this.categoriaService.getByCategoria(id).subscribe(data => {
      this.headerService.titulo.set(data.nombre);
      this.productos = data['productos'];
    });
  }
}
