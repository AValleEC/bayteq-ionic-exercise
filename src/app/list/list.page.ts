import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { User } from '../models/user';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  userList: User[]=[];
  viewStep: number = 10;
  scrollCount: number = 1;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userList = this.userService.getUserList();
  }

  viewElements(){
    let count = 0;
    return this.userList.filter(e => {
      count++;
      return count <= this.scrollCount*this.viewStep
    });
  }

  async setFavorite(id:number){
    await this.userService.toggleFavorite(id);    
  }

  onIonInfinite(ev:any) {
    this.scrollCount++;
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 250);
  }

}
