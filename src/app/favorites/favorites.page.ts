import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { User } from '../models/user';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

  userList: User[]=[];
  viewStep: number = 10;
  scrollCount: number = 1;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.userList = this.userService.getUserList();
  }

  viewElements(){
    let count = 0;
    return this.userList.filter(e => {
      if(e.favorite){
        count++;
        return (count <= this.scrollCount*this.viewStep) && e.favorite;
      }
      else return false;
    });
  }

  onIonInfinite(ev:any) {
    this.scrollCount++;
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 250);
  }

}
