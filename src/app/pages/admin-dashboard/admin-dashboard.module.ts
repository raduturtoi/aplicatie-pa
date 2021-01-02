import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminDashboardPageRoutingModule } from './admin-dashboard-routing.module';

import { AdminDashboardPage } from './admin-dashboard.page';
import { NgCalendarModule } from 'ionic2-calendar';

import localeRo from '@angular/common/locales/ro';
registerLocaleData(localeRo);

import { OrarComponent } from 'src/app/components/orar/orar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminDashboardPageRoutingModule,
    NgCalendarModule
  ],
  declarations: [AdminDashboardPage, OrarComponent],
  providers: [
    {provide: LOCALE_ID, useValue: "ro-RO"}
  ]
})
export class AdminDashboardPageModule {}
