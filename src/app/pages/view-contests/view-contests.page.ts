import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CompetitionInterface } from "src/app/models/addContest";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-view-contests",
  templateUrl: "./view-contests.page.html",
  styleUrls: ["./view-contests.page.scss"],
})
export class ViewContestsPage implements OnInit {
  competitions: CompetitionInterface[] = [
    // {
    //   competitionName: "concurs1",
    //   competitionId: 1,
    //   startTime: new Date(),
    //   endTime: new Date(),
    //   description:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has",
    // },
    // {
    //   competitionName: "concurs1",
    //   competitionId: 1,
    //   startTime: new Date(),
    //   endTime: new Date(),
    //   description:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has",
    // },
  ];

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    this.auth.getContests().subscribe((res: CompetitionInterface[]) => {
      this.competitions = res;
      console.log(res);
    });
  }

  getCompetition(contest: any) {}
}
