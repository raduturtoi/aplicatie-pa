import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddContestPage } from './add-contest.page';

const routes: Routes = [
  {
    path: '',
    component: AddContestPage
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddContestPageRoutingModule {}
