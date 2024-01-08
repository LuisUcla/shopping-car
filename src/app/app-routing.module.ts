import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { RubroComponent } from './pages/rubro/rubro.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { ArticuloComponent } from './pages/articulo/articulo.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent 
  },
  {
    path: 'carrito', 
    component: CarritoComponent 
  },
  {
    path: 'articulo', 
    component: ArticuloComponent 
  },
  {
    path: 'perfil', 
    component: PerfilComponent 
  },
  {
    path: 'rubro', 
    component: RubroComponent 
  },
  {
    path: 'buscar', 
    component: BuscarComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
