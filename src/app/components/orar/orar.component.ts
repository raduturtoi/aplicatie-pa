import { Component, OnInit, ViewChild } from '@angular/core';
import { Calendar } from '@ionic-native/calendar/ngx';
import { NavController } from '@ionic/angular';
import { CalendarComponent } from 'ionic2-calendar';

@Component({
  selector: 'app-orar',
  templateUrl: './orar.component.html',
  styleUrls: ['./orar.component.scss'],
})
export class OrarComponent implements OnInit {

  eventSource = [];
  viewTitle: string;

  calendar = {
      mode: 'month',
      currentDate: new Date(),
  };

  @ViewChild(CalendarComponent) myCal: CalendarComponent;

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }


  next() {
    this.myCal.slideNext();
  }

  back (){
    this.myCal.slidePrev();
  }

  onViewTitleChanged(title){
    this.viewTitle = title
  }

}
