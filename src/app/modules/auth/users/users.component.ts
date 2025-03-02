import { Component, OnInit } from '@angular/core';

import { UserService } from '../../../core/user/user.service';
import { UserJWTInterface } from '../../../core/user/user.types';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
})
export class UsersComponent implements OnInit {
  public users: UserJWTInterface[] = [];

  constructor(private readonly service: UserService) {}

  ngOnInit(): void {
    this.service.findAll().subscribe((users) => {
      this.users = users;
    });
  }
}
