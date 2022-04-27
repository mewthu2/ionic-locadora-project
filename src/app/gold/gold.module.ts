import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GoldPageRoutingModule } from './gold-routing.module';

import { GoldPage } from './gold.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoldPageRoutingModule
  ],
  declarations: [GoldPage]
})
export class GoldPageModule {}
