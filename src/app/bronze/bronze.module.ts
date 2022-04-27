import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BronzePageRoutingModule } from './bronze-routing.module';

import { BronzePage } from './bronze.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BronzePageRoutingModule
  ],
  declarations: [BronzePage]
})
export class BronzePageModule {}
