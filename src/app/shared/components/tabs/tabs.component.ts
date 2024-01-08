import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent {

  seleccionado = [false, false, false, false];

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        switch(event.urlAfterRedirects) {
          case '/':
            this.seleccionado = [true, false, false, false];
            break;

          case '/buscar':
            this.seleccionado = [false, true, false, false];
            break;

          case '/carrito':
            this.seleccionado = [false, false, true, false];
            break;

          case '/perfil':
            this.seleccionado = [false, false, false, true];
            break;
          
          default:
            this.seleccionado = [false, false, false, false];
            break;
        }
      }
    })
  }

  navegar(params: string) {
    this.router.navigateByUrl(params)
  }
}
