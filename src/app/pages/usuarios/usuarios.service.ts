import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUsuario } from 'src/shared/models/usuarios';
import { CRUDService } from 'src/shared/services/crud.service';
import { ServerService } from 'src/shared/services/server.service';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService extends CRUDService<IUsuario> {

  constructor(public http: HttpClient, public server: ServerService) {
    super(http, server, 'user');
  }

}
