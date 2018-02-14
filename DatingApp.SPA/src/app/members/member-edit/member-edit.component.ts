import { ActivatedRoute } from '@angular/router';
import { User } from './../../_models/User';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertifyService } from '../../_services/alertify.service';
import { NgForm } from '@angular/forms';
import { UserService } from '../../_services/user.service';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {
  user: User;
  @ViewChild('editForm') editForm: NgForm;

  constructor(
    private route: ActivatedRoute, 
    private alertifyService: AlertifyService, 
    private userService: UserService, 
    private authService: AuthService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user= data['user'];
    });
  }

  updateUser() {
    this.userService.updateUser(this.authService.decodedToken.nameid, this.user).subscribe(next => {
      this.alertifyService.success('Profile has been succesfully updated!')
      this.editForm.reset(this.user);
    }, error => {
      this.alertifyService.error(error);
    });
  }

}
