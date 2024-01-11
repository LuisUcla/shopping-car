import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { BuscarComponent } from './buscar/buscar.component';
import { CarritoComponent } from './carrito/carrito.component';
import { RubroComponent } from './rubro/rubro.component';
import { PerfilComponent } from './perfil/perfil.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        HomeComponent,
        ArticuloComponent,
        BuscarComponent,
        CarritoComponent,
        RubroComponent,
        PerfilComponent
    ],
    imports: [CommonModule, SharedModule, FormsModule, RouterModule]
  })

export class PagesModule { }
