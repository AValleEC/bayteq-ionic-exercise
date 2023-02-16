import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

export const buttonsOk = [
  {
    text: 'Ok',
    handler: ()=>{}
  }
]

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private msgHead:string = '';
  private msgBody: string = '';
  private msgButtons: any[]=[];


  constructor(
    private alertCtrl: AlertController
  ) { }
  
  public async errorAlert(errorName:string, errorDescription: string){
    this.msgBody = "<h1 class='alertTitleError'>Error</h1><h5>"+errorName+"</h5><h6>"+errorDescription+"</h6>";
    this.msgButtons = buttonsOk;
    await this.show();    
  }

  async show(){
    const alerta = await this.alertCtrl.create({
      cssClass: 'cssalerta',
      header: this.msgHead,
      message: this.msgBody,
      buttons: this.msgButtons,
    });
    return await alerta.present();
  }
}
