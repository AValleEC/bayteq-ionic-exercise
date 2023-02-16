import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { DataSource } from 'src/app/models/datasource';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from 'src/app/models/user';

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
  private authUserId: number = -1;

  constructor(
    private httpCli: HttpClient
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
        if(r.results) this.userList = r.results;
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

  public setAuthUser(username:string):boolean{
    let id:number = this.userList.findIndex((user)=>{
      if ((user.name.first+user.name.last).toLowerCase() == username.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f\s]/g,"")) return true;
      else return false;
    });
    if (id < 0) return false;
    this.authUserId = id;
    return true;
  }


}
