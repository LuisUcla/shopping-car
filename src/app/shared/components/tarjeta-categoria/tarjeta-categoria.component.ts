import { Component, Input, OnInit } from '@angular/core';
import { Categoria } from '../../interfaces/categoria.interface';

@Component({
  selector: 'app-tarjeta-categoria',
  templateUrl: './tarjeta-categoria.component.html',
  styleUrl: './tarjeta-categoria.component.css'
})
export class TarjetaCategoriaComponent implements OnInit {
  @Input({ required: true }) categoria!: Categoria;
  
  ngOnInit(): void {
    console.log(this.categoria)
  }
}
