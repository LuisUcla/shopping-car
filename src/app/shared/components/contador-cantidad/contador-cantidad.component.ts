import { Component, EventEmitter, Output, signal } from '@angular/core';

@Component({
  selector: 'app-contador-cantidad',
  templateUrl: './contador-cantidad.component.html',
  styleUrl: './contador-cantidad.component.css'
})
export class ContadorCantidadComponent {
  numero = signal(1);
  @Output() cantidadCambiada = new EventEmitter<number>() // emiso de eventos

  actualizarNumero(dif: number) {
    this.numero.set(Math.max(this.numero() + dif, 1));
    this.cantidadCambiada.emit(this.numero());
  }

}
