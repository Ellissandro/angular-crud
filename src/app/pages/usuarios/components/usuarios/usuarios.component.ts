import { Observable } from 'rxjs';
import { UsuariosService } from './../../usuarios.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../usuarios.model';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
})

export class UsuariosComponent implements OnInit {
  particles = [];
  usuarios: Observable<Usuario[]>;
  constructor(private usuarioService: UsuariosService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.generateParticles();
    this.load();
  }

  async load() {
    this.usuarios = this.usuarioService.getData();
  }
  generateParticles() {
    for (let i = 0; i < 1000; i++) {
      this.particles.push(i)
    }
  }
  openUserForm() {
    const dialogRef = this.dialog.open(ModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}