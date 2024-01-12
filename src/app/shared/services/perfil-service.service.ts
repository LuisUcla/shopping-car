import { Injectable, WritableSignal, signal } from '@angular/core';
import { Perfil } from '../interfaces/perfil.interface';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  constructor() {
    const perfilLocalStore = localStorage.getItem('perfil');

    if (perfilLocalStore) {
      
      this.perfil.set(JSON.parse(perfilLocalStore))
    }
  }

  perfil: WritableSignal<Perfil | undefined> = signal(undefined);

  guardarDatos(perfil: Perfil) {
    localStorage.setItem('perfil', JSON.stringify(perfil));
    this.perfil.set(perfil);
  }
}
