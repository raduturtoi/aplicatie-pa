import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.page.html",
  styleUrls: ["./register.page.scss"],
})
export class RegisterPage implements OnInit {
  registerStep: number = 0;
  passwordCrypted: string = "";
  registerForm: FormGroup;
  maximDate: string;
  minimDate: string;
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {}

  formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "2" + month;
    if (day.length < 2) day = "2" + day;

    return [year, month, day].join("-");
  }

  ngOnInit() {
    this.registerStep = 0;
    let currentDate = new Date();
    let maximDate = currentDate;
    this.maximDate = this.formatDate(
      maximDate.setFullYear(new Date().getFullYear() - 5)
    );
    let minimDate = currentDate;
    this.minimDate = this.formatDate(
      minimDate.setFullYear(new Date().getFullYear() - 100)
    );

    this.registerForm = this.fb.group(
      {
        firstName: ["", Validators.required],
        lastName: ["", Validators.required],
        birthDate: ["", Validators.required],
        invitationCode: ["", Validators.required],
        email: ["", [Validators.required, Validators.email]],
        password: ["", [Validators.required, Validators.minLength(6)]],
        confirmPassword: ["", [Validators.required, Validators.minLength(6)]],
      },
      {
        validators: this.password.bind(this),
      }
    );
  }

  password(formGroup: FormGroup) {
    const { value: password } = formGroup.get("password");
    const { value: confirmPassword } = formGroup.get("confirmPassword");
    return password === confirmPassword ? null : { passwordNotMatch: true };
  }

  register(): void {
    this.auth.invitation(this.registerForm.value).subscribe(
      (res) => {
        console.log(res);
        this.passwordCrypted = res["hash"];
        this.registerStep++;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  slideOpts = {
    initialSlide: 1,
    speed: 400,
  };

  activate(): void {}

  onCodeCompleted(code: string) {
    let user = this.registerForm.value;
    user.invitationHash = this.passwordCrypted;
    user.invitationCode = code;
    user.groupId = 1;
    user.username = user.email;

    this.auth.register(user).subscribe((res) => {
       this.auth.goBack();
    });
  }
}

