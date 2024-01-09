import { Component, OnInit, inject } from '@angular/core';
import { HeaderService } from '../../shared/services/header.service';

@Component({
  selector: 'app-rubro',
  templateUrl: './rubro.component.html',
  styleUrl: './rubro.component.css'
})
export class RubroComponent implements OnInit {
  headerService = inject(HeaderService);
  
  ngOnInit(): void {
    this.headerService.titulo.set('Rubro')
  }
}
