import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  /* De ahora en adelante se usara las signals como variables */
  titulo = signal('Titulo'); // es una signal
  extend = signal(false);

  constructor() { }
}
