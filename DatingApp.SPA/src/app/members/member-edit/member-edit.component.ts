import { ActivatedRoute } from '@angular/router';
import { User } from './../../_models/User';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertifyService } from '../../_services/alertify.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {
  user: User;
  @ViewChild('editForm') editForm: NgForm;

  constructor(private route: ActivatedRoute, private alertifyService: AlertifyService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user= data['user'];
    });
  }

  updateUser() {
    console.log(this.user);
    this.alertifyService.success('Profile has been succesfully updated!')
    this.editForm.reset(this.user);
  }

}
