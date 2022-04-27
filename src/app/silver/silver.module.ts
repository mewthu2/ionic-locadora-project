import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SilverPageRoutingModule } from './silver-routing.module';

import { SilverPage } from './silver.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SilverPageRoutingModule
  ],
  declarations: [SilverPage]
})
export class SilverPageModule {}
