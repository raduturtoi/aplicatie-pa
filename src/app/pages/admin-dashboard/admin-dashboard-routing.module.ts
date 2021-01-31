import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AdminDashboardPage } from './admin-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: AdminDashboardPage
  },
  {
    path: 'add-contest',
    loadChildren: () => import('./pages/add-contest/add-contest.module').then( m => m.AddContestPageModule)
  }
 

];

@NgModule({
  imports: [RouterModule.forChild(routes),],
  exports: [RouterModule],
})
export class AdminDashboardPageRoutingModule {}
