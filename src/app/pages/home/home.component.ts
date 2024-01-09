import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { HeaderService } from '../../shared/services/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  
  headerService = inject(HeaderService);
  
  ngOnInit(): void {
    this.headerService.titulo.set('Home');
    this.headerService.extend.set(true);
  }
  ngOnDestroy(): void {
    this.headerService.extend.set(false);
  }
}
