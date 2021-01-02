import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CALENDARPage } from './calendar.page';

const routes: Routes = [
  {
    path: '',
    component: CALENDARPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CALENDARPageRoutingModule {}
