import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
  maximDate: string;
  minimDate: string;
  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) { }

   formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '2' + month;
    if (day.length < 2) 
        day = '2' + day;

    return [year, month, day].join('-');
}

  ngOnInit() {
    let currentDate = new Date();
    let maximDate = currentDate;
    this.maximDate = this.formatDate(maximDate.setFullYear(new Date().getFullYear() - 5))  ;
    let minimDate = currentDate;
    this.minimDate = this.formatDate(minimDate.setFullYear(new Date().getFullYear() - 100))  ;

    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthdate: ['', Validators.required],
      inviteCode: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    },
    {
      validators: this.password.bind(this)
    })
  }

  password(formGroup: FormGroup) {
    const { value: password } = formGroup.get('password');
    const { value: confirmPassword } = formGroup.get('confirmPassword');
    return password === confirmPassword ? null : { passwordNotMatch: true };
  }

  register(){
    this.auth.register(this.registerForm.value).subscribe(res => {
       console.log(res);
       this.router.navigateByUrl('activate');
    })
  }

  slideOpts = {
    initialSlide: 1,
    speed: 400
  }

}
