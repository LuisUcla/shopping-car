import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../shared/services/header.service';
import { Perfil } from '../../shared/interfaces/perfil.interface';
import { PerfilService } from '../../shared/services/perfil-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent implements OnInit {
  
  perfil: Perfil = { // datos del formulario de perfil
    nombre: '',
    direccion: '',
    telefono: '',
    detalleEntrega: ''
  }

  constructor(
    private headerService: HeaderService,
    private perfilService: PerfilService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.headerService.titulo.set('Perfil');

    if (this.perfilService.perfil()) {
      this.perfil = {...this.perfilService.perfil()!} // ! significa que perfilService.perfil() existe
    }
  }


  guardarDatos() {
    this.perfilService.guardarDatos(this.perfil);
    this.router.navigate(['/carrito'])
  }
}
