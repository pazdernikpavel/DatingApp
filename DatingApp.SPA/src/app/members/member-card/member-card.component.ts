import { AuthService } from './../../_services/auth.service';
import { User } from './../../_models/User';
import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css']
})
export class MemberCardComponent implements OnInit {
  @Input() user: User;
  defaultPhoto = '../../../assets/user.png';

  constructor() { }

  ngOnInit() {
  }

}
