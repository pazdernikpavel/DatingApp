import { User } from './_models/User';
import { JwtHelper } from 'angular2-jwt';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './_services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  jwthelper: JwtHelper = new JwtHelper;

  constructor(private authService: AuthService) {  }

  ngOnInit() {
    const token = localStorage.getItem('token');
    const user: User = JSON.parse(localStorage.getItem('user'));
    if(token) {
      this.authService.decodedToken = this.jwthelper.decodeToken(token);
    }
    if(user) {
      this.authService.currentUser = user;
      this.authService.changeMemberPhoto(user.photoUrl);
    }
  }
}
