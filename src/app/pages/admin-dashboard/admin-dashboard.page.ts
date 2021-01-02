import { Component, OnInit} from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.page.html',
  styleUrls: ['./admin-dashboard.page.scss'],
})
export class AdminDashboardPage implements OnInit {

  constructor(private auth: AuthService ) { }

  ngOnInit() {}

  signOut(){
    this.auth.signOut();
  }

  public should_open = false;
  openOrar(){
    this.should_open = true;
  }

}
