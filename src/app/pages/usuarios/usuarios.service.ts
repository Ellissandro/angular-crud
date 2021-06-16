import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUsuario } from 'src/app/shared-components/models/usuarios';
import { CRUDService } from 'src/app/shared-components/services/crud.service';
import { ServerService } from 'src/app/shared-components/services/server.service';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService extends CRUDService<IUsuario> {

  constructor(public http: HttpClient, public server: ServerService) {
    super(http, server, 'user');
  }

}
