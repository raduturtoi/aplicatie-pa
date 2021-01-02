import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchedulePageRoutingModule } from './schedule-routing.module';

import { SchedulePage } from './schedule.page';
import { OrarComponent } from 'src/app/components/orar/orar.component';

import { NgCalendarModule } from 'ionic2-calendar';

import localeRo from '@angular/common/locales/ro';
registerLocaleData(localeRo);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchedulePageRoutingModule,
    NgCalendarModule
  ],
  declarations: [SchedulePage, OrarComponent],
  providers: [
    {provide: LOCALE_ID, useValue: "ro-RO"}
  ]
})
export class SchedulePageModule {}
