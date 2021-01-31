import { Injectable } from "@angular/core";
import { BehaviorSubject, from, Observable, of, Subject } from "rxjs";
import { Storage } from "@ionic/storage";
import { Router } from "@angular/router";
import { filter } from "rxjs/operators";
import { RegisterUserInterface } from "../models/registerUser";
import { LoginUserInterface } from "../models/loginUser";

import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { ActivateUserInterface } from "../models/activateUser";
import { CompetitionInterface } from "../models/addContest";
import { UserDashboardPageRoutingModule } from "../pages/user-dashboard/user-dashboard-routing.module";

const TOKEN_KEY = "user-token";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  public user: Observable<any>;
  public authState = new BehaviorSubject(null);

  constructor(
    private router: Router,
    private http: HttpClient
  ) {}

  loadUser(data: any) {
    this.authState.next(data);
    this.user = this.authState.asObservable();
  }

  setToken(token: any){
    localStorage.setItem(TOKEN_KEY, JSON.stringify(token));
  }

  getToken(){
    return JSON.parse(localStorage.getItem(TOKEN_KEY));
  }

  signIn(user: LoginUserInterface): Observable<any> {
    console.log(user);
    return this.http.post(environment.apiUrl + "/api/auth/login", user);
  }

  async signOut() {
    localStorage.setItem(TOKEN_KEY, null);
    this.router.navigateByUrl("/login");
  }

  public invitation(user: RegisterUserInterface): Observable<any> {
    return this.http.post(environment.apiUrl + "/api/auth/invitation", user);
  }

  public register(user: ActivateUserInterface): Observable<any> {
    return this.http.post(environment.apiUrl + "/api/auth/register", user);
  }

  public goBack() {
    this.router.navigateByUrl("/login");
  }

  public getAgeCategory() {
    return this.http.get(environment.apiUrl + "/api/AgeCategories");
  }

  public getGroup(id: any) {
    return this.http.get(environment.apiUrl + "/api/Groups/" + id);
  }

  public getData(username){
    return this.http.get(environment.apiUrl + "/api/Students/" + username );
  }

  public addContest(contest: CompetitionInterface): Observable<any> {
    return this.http.post(environment.apiUrl + "/api/Competitions", contest);
  }

  public getContests() {
    return this.http.get(environment.apiUrl + "/api/Competitions");
  }
}
