import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable, of } from 'rxjs';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { RegisterUserInterface } from '../models/registerUser';
import { LoginUserInterface } from '../models/loginUser';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const TOKEN_KEY = 'user-token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Observable<any>;
  private authData = new BehaviorSubject(null);

  constructor(private storage: Storage, private router: Router, private http:HttpClient) { 

    // this.loadUser();

    // this.user = this.authState.asObservable().pipe(
    //   filter(response => response)
    // )
  }

  // loadUser(){

  //   this.storage.get(TOKEN_KEY).then(data => {
  //     console.log('Load user: ' , data);
  //     if(data) {
  //       this.authState.next(data);
  //     }else {
  //       this.authState.next({username: null, role: null});
  //     }
  //   });

  // }

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

      return this.http.post(environment.apiUrl + "/api/auth/login", user)
      }

      async signOut(){
        await this.storage.set(TOKEN_KEY, null);
        this.router.navigateByUrl("/login")

      }

      public register(user: RegisterUserInterface): Observable < any >{
          return this.http.post(environment.apiUrl + "/api/auth/invitation", user)
      }



  }
 
