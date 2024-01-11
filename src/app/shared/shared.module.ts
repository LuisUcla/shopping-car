import { NgModule } from '@angular/core';
import { TabsComponent } from './components/tabs/tabs.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { TarjetaCategoriaComponent } from './components/tarjeta-categoria/tarjeta-categoria.component';
import { TarjetaProductoComponent } from './components/tarjeta-producto/tarjeta-producto.component';
import { ContadorCantidadComponent } from './components/contador-cantidad/contador-cantidad.component';

@NgModule({
    declarations: [
        TabsComponent,
        HeaderComponent,
        TarjetaCategoriaComponent,
        TarjetaProductoComponent,
        ContadorCantidadComponent
    ],
    imports: [CommonModule],
    exports: [
        TabsComponent,
        HeaderComponent,
        TarjetaCategoriaComponent,
        TarjetaProductoComponent,
        ContadorCantidadComponent
    ]
  })

export class SharedModule { }
