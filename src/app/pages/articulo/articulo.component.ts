import { Component, OnInit, inject } from '@angular/core';
import { HeaderService } from '../../shared/services/header.service';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrl: './articulo.component.css'
})
export class ArticuloComponent implements OnInit {
  headerService = inject(HeaderService);
  
  ngOnInit(): void {
    this.headerService.titulo.set('Articulo')
  }
}
