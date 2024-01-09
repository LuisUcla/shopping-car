import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { HeaderService } from '../../shared/services/header.service';
import { CategoriaService } from '../../shared/services/categoria.service';
import { Categoria } from '../../shared/interfaces/categoria.interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, OnDestroy {
  
  categorias: Categoria[] = [];

  constructor(
    private headerService: HeaderService,
    private categoriaService: CategoriaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.headerService.titulo.set('Home');
    this.headerService.extend.set(true);

    this.getCategorias();
  }

  categoriaDetail(id: number) {
    console.log("id: ", id)
    
    // navegacion a la vista de categorias
    this.router.navigate(['/categoria', id])

  }

  getCategorias() {
    this.categoriaService.getAll().subscribe(async data => {
      this.categorias = data;
    });
  }

  ngOnDestroy(): void {
    this.headerService.extend.set(false);
  }
}
