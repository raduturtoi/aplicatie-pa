import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddContestPageRoutingModule } from './add-contest-routing.module';

import { AddContestPage } from './add-contest.page';

import { ViewContestsPageModule } from 'src/app/pages/view-contests/view-contests.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddContestPageRoutingModule,
    ViewContestsPageModule
  ],
  declarations: [AddContestPage]
})
export class AddContestPageModule {}
