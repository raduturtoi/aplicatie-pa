import { Injectable } from '@angular/core';
import { async } from '@angular/core/testing';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { take, map}  from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor (private router : Router , private auth: AuthService, private alertCtrl: AlertController) { }

  canActivate(route: ActivatedRouteSnapshot){

    const expectedRole = route.data.role;
    console.log('expected: ' , expectedRole);

    return this.auth.user.pipe(
    take(1),
    map(user => {
      console.log('log: ', user);
      if (user){
        let role = user['role'];

        if(expectedRole == role){
          return true;
        }else {
          this.showAlert();
          return this.router.parseUrl('/login');
        }
      } else {
        this.showAlert();
        return this.router.parseUrl('/login');

      }
    })
    )
}

async showAlert () {

  let alert = await this.alertCtrl.create({
    header: 'Unauthorized',
    message: 'acces nepermis',
    buttons: ['OK']
  });
    alert.present();

}
}