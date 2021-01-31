import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";

import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-add-contest",
  templateUrl: "./add-contest.page.html",
  styleUrls: ["./add-contest.page.scss"],
})
export class AddContestPage implements OnInit {
  contestForm: FormGroup;
  competitionName: string;
  startTime: Date;
  endTime: Date;
  description: Text;
  maximDate: string;
  minimDate: string;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private alertCtrl: AlertController
  ) {}

  formatDate(date) {
    var d = new Date(date),
      month = "" + d.getMonth(),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 0) day = "0" + day;

    return [year, month, day].join("-");
  }

  ngOnInit() {
    let currentDate = new Date();
    let maximDate = currentDate;
    this.maximDate = this.formatDate(
      maximDate.setFullYear(new Date().getFullYear() + 5)
    );
    let minimDate = currentDate;
    this.minimDate = this.formatDate(
      minimDate.setFullYear(new Date().getFullYear())
    );

    this.contestForm = this.fb.group({
      competitionName: ["", Validators.required],
      startTime: ["", Validators.required],
      endTime: ["", Validators.required],
      description: ["", Validators.required],
    });
  }

  async presentAlert() {
    let alert = this.alertCtrl.create({
      message: "Concurs adaugat",
      buttons: ["OK"],
    });
   (await alert).present();
  }

  addContest(): void {
    let contest = this.contestForm.value;

    this.auth.addContest(contest).subscribe((res) => {});
 
    this.presentAlert();

  }

}
