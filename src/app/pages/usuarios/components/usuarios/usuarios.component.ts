import { Observable } from 'rxjs';
import { UsuariosService } from './../../usuarios.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../usuarios.model';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
})

export class UsuariosComponent implements OnInit {
  particles = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry';
  usuarios: Observable<Usuario[]>;
  constructor(private usuarioService: UsuariosService) { }

  ngOnInit(): void {
    this.load();
  }

  async load() {
    this.usuarios = this.usuarioService.getData();
  }
}
