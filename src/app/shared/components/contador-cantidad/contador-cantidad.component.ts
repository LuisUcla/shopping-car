import { Component, EventEmitter, Input, OnInit, Output, signal } from '@angular/core';

@Component({
  selector: 'app-contador-cantidad',
  templateUrl: './contador-cantidad.component.html',
  styleUrl: './contador-cantidad.component.css'
})
export class ContadorCantidadComponent implements OnInit {
  
  numero = signal(1); // --> cantidad
  @Output() cantidadCambiada = new EventEmitter<number>() // emiso de eventos
  @Input() cantidadInicial = 1;
  
  ngOnInit(): void {
    this.numero.set(this.cantidadInicial) 
  }

  actualizarNumero(dif: number) {
    this.numero.set(Math.max(this.numero() + dif, 1));
    this.cantidadCambiada.emit(this.numero());
  }
  
}
