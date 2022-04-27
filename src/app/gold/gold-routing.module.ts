import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoldPage } from './gold.page';

const routes: Routes = [
  {
    path: '',
    component: GoldPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GoldPageRoutingModule {}
