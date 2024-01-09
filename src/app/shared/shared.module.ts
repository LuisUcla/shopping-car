import { NgModule } from '@angular/core';
import { TabsComponent } from './components/tabs/tabs.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
    declarations: [
        TabsComponent,
        HeaderComponent,
    ],
    imports: [CommonModule],
    exports: [
        TabsComponent,
        HeaderComponent
    ]
  })

export class SharedModule { }
