import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewContestsPageRoutingModule } from './view-contests-routing.module';

import { ViewContestsPage } from './view-contests.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewContestsPageRoutingModule
  ],
  declarations: [ViewContestsPage]
})
export class ViewContestsPageModule {}
