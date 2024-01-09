import { Component, OnInit, inject } from '@angular/core';
import { HeaderService } from '../../shared/services/header.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrl: './buscar.component.css'
})
export class BuscarComponent implements OnInit {
 
  headerService = inject(HeaderService);
  
  ngOnInit(): void {
    this.headerService.titulo.set('Busqueda de articulo')
  }
}
