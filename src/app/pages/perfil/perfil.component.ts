import { Component, OnInit, inject } from '@angular/core';
import { HeaderService } from '../../shared/services/header.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent implements OnInit {
  headerService = inject(HeaderService);
  
  ngOnInit(): void {
    this.headerService.titulo.set('Perfil')
  }
}
