import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AlertService } from '../services/alert/alert.service';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  UserForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private alertService: AlertService,
    private navCtrl: NavController 
  ) { 
    this.UserForm = this.buildForm();
  }

  ngOnInit() {
    this.userService.resetAuthUser();
  }

  /**
   * buildForm: Construccion de Formulario
   * Constraints para Nombre:
   *  No vacío
   *  Solo Letras
   * Constraints para Email:
   *  No vacío
   *  Formato Email Valido
   * @returns FormGroup
   */
  private buildForm():FormGroup{
    return this.formBuilder.group({
      username: [null, Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z\\s]*$')
      ])],
      email: [null, Validators.compose([
        Validators.required,
        Validators.email,
      ])]
    });
  }

  /**
   * submit: Verificar que username existe en lista de Usuarios
   * Fullmatch
   * Case Insensitive
   */
  async submit(){
    if (!this.userService.setAuthUser(this.UserForm.controls['username'].value, this.UserForm.controls['email'].value)) {
      this.UserForm.controls['username'].reset();
      return await this.alertService.errorAlert('Acceso Incorrecto', 'El Usuario no existe. Inténtelo de nuevo.');
    }            
    // Usuario autenticado. 
    this.navCtrl.navigateRoot('home');
  }

}
