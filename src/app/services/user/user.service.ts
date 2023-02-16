import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  constructor(
    private httpCli: HttpClient
  ) { }


}
