import { Component, OnInit } from '@angular/core';
import { ProfileInterface } from 'src/app/models/profile';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.page.html',
  styleUrls: ['./user-dashboard.page.scss'],
})
export class UserDashboardPage implements OnInit {

  profile: ProfileInterface;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    let res = this.auth.getToken();
    console.log(res);
    this.auth.getData(res["username"]).subscribe((res: ProfileInterface) =>{
        this.profile=res;
    })
  }

  signOut(){
    this.auth.signOut();
  }



}
