import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { DataSource } from 'src/app/models/datasource';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from 'src/app/models/user';
import { AuthUser } from 'src/app/models/authuser';
import { AlertService } from '../alert/alert.service';

const seed = 'a';
const nat = 'es';

/**
 * UserService: Servicio para gestión de Usuarios.
 * Utiliza API gratuita Random User Generator (https://randomuser.me)   
 * Parámetros 'Seed','NAT' constantes para garantizar respuesta estática
 */
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userList : User[] = [];
  private authUser: AuthUser | null  = null; 

  constructor(
    private httpCli: HttpClient,
    private alertService:AlertService
  ) { }

  public fetchUsers(nrUsers:number = 50):Observable<DataSource>{
    return this.httpCli.get<DataSource>(
      environment.dataSourceEndpoint, 
      {
        params: {
          'results': nrUsers,
          'nat': nat,
          'seed':seed, 
        }
      }
    ).pipe(
      tap(r =>{
        if(r.results) {
          this.userList = r.results;
          // Definir a todo usuario como "No Favorito"ç
          this.userList.forEach(u=>{u.favorite=false});
        }
      }),
      catchError((e:HttpErrorResponse):Observable<any>=>{
        // TODO: Implementaciones de emergencia en caso de falla de conexion
        console.log(e);
        return of(null);
      })
    );
  }

  public getUserList():User[]{
    return this.userList;
  }

  public getAuthUser():AuthUser|null{
    return this.authUser;
  }

  public setAuthUser(username:string, email: string):boolean{
    let userFind = this.userList.find((user)=>{
      if ((user.name.first+user.name.last).toLowerCase() == username.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f\s]/g,"")) return true;
      else return false;
    });
    if (!userFind) return false;
    this.authUser = {
      userData: userFind,
      authEmail: email
    };
    return true;
  }

  public async toggleFavorite(id:number){
    let msg: string;
    if(this.userList[id].favorite) msg = "Usuario eliminado de Favoritos";
    else msg = "Usuario añadido a Favoritos";    
    this.userList[id].favorite = !this.userList[id].favorite;
    //await this.alertService.warningAlert(msg);
  }

  public resetAuthUser(){
    this.authUser = null;
  }


}
