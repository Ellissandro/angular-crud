import { Observable } from 'rxjs';
import { UsuariosService } from './../../usuarios.service';
import { Component, OnInit } from '@angular/core';
import { IUsuario } from '../../../../shared-components/models/usuarios';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
})

export class UsuariosComponent implements OnInit {
  particles = [];
  users: IUsuario[] = [];
  temporaryUsers: IUsuario[] = [];
  constructor(private usuarioService: UsuariosService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.generateParticles();
    this.load();
  }

  async load() {
    this.usuarioService.getData().subscribe(response => {
      this.users = response;
      this.temporaryUsers = [...this.users]
    })
  }
  generateParticles() {
    for (let i = 0; i < 1000; i++) {
      this.particles.push(i)
    }
  }
  openUserForm() {
    const dialogRef = this.dialog.open(ModalComponent);

    dialogRef.componentInstance.onUserCreate.subscribe(response => {
      this.temporaryUsers.push(response);
      this.dialog.closeAll();
      this.updateFilter();
    });
  }

  deleteUser(user: IUsuario) {
    this.temporaryUsers.splice(this.temporaryUsers.findIndex(tempUser => tempUser.id === user.id), 1);
    this.updateFilter();
  }

  updateFilter() {
    this.users = this.temporaryUsers;
  }
}