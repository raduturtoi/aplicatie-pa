import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewContestsPage } from './view-contests.page';

const routes: Routes = [
  {
    path: '',
    component: ViewContestsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewContestsPageRoutingModule {}
