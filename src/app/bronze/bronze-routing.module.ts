import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BronzePage } from './bronze.page';

const routes: Routes = [
  {
    path: '',
    component: BronzePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BronzePageRoutingModule {}
