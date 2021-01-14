import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";
import { AuthService } from "./../../services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  user = {
    username: "",
    password: "",
  };

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {}

  signIn() {
    this.auth.signIn(this.user).subscribe((token) => {
      const helper = new JwtHelperService();
      const tokenDecoded = helper.decodeToken(token.token);
      const role = tokenDecoded["role"];
      
      this.auth.setToken(tokenDecoded);
      this.auth.loadUser(tokenDecoded);

      if (role == "ADMIN") this.router.navigateByUrl("/admin-dashboard");
      else if (role == "USER") this.router.navigateByUrl("/user-dashboard");
    });
  }
}
