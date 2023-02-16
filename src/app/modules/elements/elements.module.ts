import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AppbarComponent } from './appbar/appbar.component';



@NgModule({
  declarations: [
    AppbarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [
    AppbarComponent
  ]
})
export class ElementsModule { }
