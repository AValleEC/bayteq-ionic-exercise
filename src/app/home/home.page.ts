import { Component, OnInit } from '@angular/core';
import { AuthUser } from '../models/authuser';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  authUser: AuthUser | null;
  userPicture: string | undefined;

  constructor(
    private userService: UserService
  ) {
    this.authUser = this.userService.getAuthUser(); 
  }

  ngOnInit(){
  }



}
