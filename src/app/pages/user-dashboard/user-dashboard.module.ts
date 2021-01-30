import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserDashboardPageRoutingModule } from './user-dashboard-routing.module';

import { UserDashboardPage } from './user-dashboard.page';

import { MenuComponent } from 'src/app/pages/user-dashboard/components/menu/menu.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserDashboardPageRoutingModule,
  ],
  declarations: [UserDashboardPage,
                MenuComponent]
})
export class UserDashboardPageModule {}
