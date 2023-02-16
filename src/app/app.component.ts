import { Component } from '@angular/core';
import { UserService } from './services/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private userService: UserService
  ) {
    this.loadUsers();
  }

  private loadUsers(){
    this.userService.fetchUsers().subscribe((r)=>{
      // Posible gestion de carga inicial de Usuarios.
      console.log(r);
    });
  }
}
