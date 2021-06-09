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
  particles = [];
  usuarios: Observable<Usuario[]>;
  constructor(private usuarioService: UsuariosService) { }

  ngOnInit(): void {
    this.generateParticles();
    this.load();
  }

  async load() {
    this.usuarios = this.usuarioService.getData();
  }
  generateParticles() {
    for (let i = 0; i < 500; i++) {
      this.particles.push(i)
    }
  }
}
