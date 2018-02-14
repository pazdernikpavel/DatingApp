import { UserService } from './../_services/user.service';
import { Observable } from 'rxjs/Rx';
import { User } from './../_models/User';
import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';
import 'rxjs/add/operator/catch';

@Injectable()
export class MemberDetailResolver implements Resolve<User> {

    constructor(private userService: UserService, private router: Router, private alertifyService: AlertifyService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<User> {
        return this.userService.getUser(route.params['id']).catch(error => {
            this.alertifyService.error('Problem with retrieving data.');
            this.router.navigate(['/members']);
            return Observable.of(null);
        });
    }

}