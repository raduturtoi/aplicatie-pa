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

const TOKEN_KEY = "user-token";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  public user: Observable<any>;
  public authState = new BehaviorSubject(null);

  constructor(
    private storage: Storage,
    private router: Router,
    private http: HttpClient
  ) {}

  loadUser(data: any) {
    this.authState.next(data);
    this.user = this.authState.asObservable();
  }

  setToken(token: string): Promise<any>{
    return this.storage.set(TOKEN_KEY , token);
  }

  signIn(user: LoginUserInterface): Observable<any> {
    // let email = credentials.email;
    // let pw = credentials.pw;
    // let user = null;

    // if(email  === 'admin'  &&  pw === 'admin'){
    //   user = {email , role: 'ADMIN'};
    // }else if (email  === 'user'  &&  pw === 'user'){
    //     user = {email , role: 'USER'};
    //   };

    //   this.authState.next(user);

    //   this.storage.set(TOKEN_KEY , user);

    //   return of(user);

    return this.http.post(environment.apiUrl + "/api/auth/login", user);
  }

  async signOut() {
    await this.storage.set(TOKEN_KEY, null);
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
}
