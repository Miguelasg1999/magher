import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioPageRoutingModule } from './inicio-routing.module';
import { InicioPage } from './inicio.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MapaComponent } from '../components/mapa/mapa.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioPageRoutingModule
  ],
  declarations: [InicioPage, MapaComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class InicioPageModule {}
