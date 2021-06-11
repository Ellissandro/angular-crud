import { Usuario } from './../../usuario.model';
import { UsuariosService } from './../../usuarios.service';
import { Component, OnInit } from '@angular/core';
import { IUsuario } from '../../../../shared-components/models/usuarios';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { DialogConfirmComponent } from 'src/app/shared-components/components/dialog-confirm/dialog-confirm.component';
import { AlertService } from 'src/app/shared-components/services/alert.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
})

export class UsuariosComponent implements OnInit {
  particles = [];
  users: IUsuario[] = [];
  temporaryUsers: IUsuario[] = [];
  constructor(private usuarioService: UsuariosService,
    private alertService: AlertService,
    public dialog: MatDialog,
  ) { }

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
  openUserForm(user: IUsuario = new Usuario()) {
    const dialogRef = this.dialog.open(ModalComponent);
    dialogRef.componentInstance.user = user;

    dialogRef.componentInstance.onUserCreate.subscribe((response: IUsuario) => {
      this.addOrUpdateUserList(response);
      this.updateFilter();
      this.dialog.closeAll();
    });
  }

  deleteUser(user: IUsuario) {
    const dialogRef = this.dialog.open(DialogConfirmComponent);
    dialogRef.componentInstance.msgConfirm = `Sim, Excluir!`;
    dialogRef.componentInstance.title = `Atenção`;
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.temporaryUsers.splice(this.temporaryUsers.findIndex(tempUser => tempUser.id === user.id), 1);
        this.updateFilter();
        this.alertService.openSnackBar('Usuário excluído com sucesso', 'alert-success')
      }
    });
  }

  addOrUpdateUserList(response: IUsuario) {
    let type = '';
    const index = this.users.findIndex(user => user.id === response.id);

    if (index !== -1) {
      this.temporaryUsers[index] = response
      type = 'atualizado'

    } else {
      this.temporaryUsers.push(response);
      type = 'cadastrado'

    }

    this.alertService.openSnackBar(`Usuário ${type} com sucesso!`, 'alert-success')
  }

  updateFilter() {
    this.users = this.temporaryUsers;
  }
}