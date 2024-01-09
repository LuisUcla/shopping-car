import { Component, OnInit, inject } from '@angular/core';
import { HeaderService } from '../../shared/services/header.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent implements OnInit {
  headerService = inject(HeaderService);
  
  ngOnInit(): void {
    this.headerService.titulo.set('Carrito')
  }

}
