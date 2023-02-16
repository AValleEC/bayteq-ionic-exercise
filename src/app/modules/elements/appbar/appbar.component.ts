import { Component, Input, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert/alert.service';

@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.scss'],
})
export class AppbarComponent implements OnInit {

  @Input() title:string = '';

  constructor(
    private alertService: AlertService
  ) { }

  ngOnInit() {}

  async logOut(){
    await this.alertService.logOut();
  }

}
