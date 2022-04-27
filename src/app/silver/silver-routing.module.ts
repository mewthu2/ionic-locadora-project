import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SilverPage } from './silver.page';

const routes: Routes = [
  {
    path: '',
    component: SilverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SilverPageRoutingModule {}
