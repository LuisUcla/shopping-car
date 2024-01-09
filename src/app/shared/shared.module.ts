import { NgModule } from '@angular/core';
import { TabsComponent } from './components/tabs/tabs.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { TarjetaCategoriaComponent } from './components/tarjeta-categoria/tarjeta-categoria.component';

@NgModule({
    declarations: [
        TabsComponent,
        HeaderComponent,
        TarjetaCategoriaComponent,
    ],
    imports: [CommonModule],
    exports: [
        TabsComponent,
        HeaderComponent,
        TarjetaCategoriaComponent
    ]
  })

export class SharedModule { }
