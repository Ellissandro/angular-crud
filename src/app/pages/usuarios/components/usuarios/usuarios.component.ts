import { Usuario } from './../../usuario.model';
import { UsuariosService } from './../../usuarios.service';
import { Component, OnInit } from '@angular/core';
import { IUsuario } from '../../../../../shared/models/usuarios';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { DialogConfirmComponent } from 'src/shared/shared-components/dialog-confirm/dialog-confirm.component';
import { AlertService } from 'src/shared/services/alert.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
})

export class UsuariosComponent implements OnInit {
  particles = [];
  users: IUsuario[] = [];
  temporaryUsers: IUsuario[] = [];
  loading = false;
  constructor(private usuarioService: UsuariosService,
    private alertService: AlertService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.generateParticles();
    this.load();
  }

  async load() {
    this.setLoad(true);
    this.usuarioService.get().subscribe(response => {
      this.users = response;
      this.temporaryUsers = [...this.users]
      this.setLoad(false);
    },
      error => {
        this.alertService.openSnackBar('Ops... Algo deu errado', 'alert-error')
      })
  }
  generateParticles() {
    for (let i = 0; i < 10; i++) {
      this.particles.push(i)
    }
  }
  openUserForm(user: IUsuario = new Usuario()) {

    const dialogRef = this.dialog.open(ModalComponent);
    dialogRef.componentInstance.user = user;

    dialogRef.componentInstance.onUserCreate.subscribe((response: IUsuario) => {
      this.addOrUpdateUserList(response);
      this.updateFilter();
    });
  }

  deleteUser(user: IUsuario) {
    const dialogRef = this.dialog.open(DialogConfirmComponent);
    dialogRef.componentInstance.msgConfirm = `Sim, Excluir!`;
    dialogRef.componentInstance.title = `Atenção`;
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.usuarioService.delete(user.idusuario).subscribe(() => {
          this.temporaryUsers.splice(this.temporaryUsers.findIndex(tempUser => tempUser.idusuario === user.idusuario), 1);
          this.updateFilter();
          this.alertService.openSnackBar('Usuário excluído com sucesso', 'alert-success')
        },
          error => {
            this.alertService.openSnackBar('Ops... Algo deu errado', 'alert-error')
          })
      }
    });
  }

  addOrUpdateUserList(response: IUsuario) {
    const index = this.users.findIndex(user => user.idusuario === response.idusuario);

    if (index !== -1) {
      this.userUpdate(response, index);

    } else {
      this.userCreate(response);
    }
  }

  userUpdate(user: IUsuario, index: number) {
    this.temporaryUsers[index] = user;
  }

  userCreate(user: IUsuario) {
    this.temporaryUsers.push(user);
  }

  updateFilter() {
    this.users = this.temporaryUsers;
  }

  setLoad(status: boolean) {
    this.loading = status;
  }
}