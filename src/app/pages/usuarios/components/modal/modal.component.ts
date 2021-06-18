import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { IUsuario } from 'src/app/shared-components/models/usuarios';
import { AlertService } from 'src/app/shared-components/services/alert.service';
import { Usuario } from '../../usuario.model';
import { UsuariosService } from '../../usuarios.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  userForm: FormGroup;
  user: IUsuario;
  loading = false;
  @Output() onUserCreate = new EventEmitter<IUsuario>();
  constructor(private usuarioService: UsuariosService,
    private alertService: AlertService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.initForm(this.user);
  }

  initForm(user: IUsuario = new Usuario()) {
    this.userForm = new FormGroup({
      idusuario: new FormControl(user.idusuario, []),
      email: new FormControl(user.email, [Validators.required, Validators.email, Validators.maxLength(100)]),
      primeironome: new FormControl(user.primeironome, [Validators.required, Validators.minLength(2), Validators.maxLength(40)]),
      sobrenome: new FormControl(user.sobrenome, [Validators.required, Validators.minLength(2)]),
      idade: new FormControl(user.idade, [Validators.required, Validators.min(1)]),
      sexo: new FormControl(user.sexo, [Validators.required]),
    });
  }
  getErrorMessage(prop: string) {
    if (this.userForm.controls[prop].hasError('required')) {
      return 'Campo obrigatório';
    }

    return this.userForm.controls[prop].hasError(prop) ? 'Campo inválido' : '';
  }

  createNewUser(formData: IUsuario) {
    const user = new Usuario(formData)
    this.addOrUpdateUserList(user);
  }

  addOrUpdateUserList(response: IUsuario) {
    if (response.idusuario) {
      this.userUpdate(response);

    } else {
      this.userCreate(response);
    }
  }

  userUpdate(user: IUsuario) {
    this.setLoad(true)
    this.usuarioService.update(user, user.idusuario).subscribe(() => {
      this.alertService.openSnackBar(`Usuário atualizado com sucesso!`, 'alert-success')
      this.onUserCreate.emit(user);
      this.dialog.closeAll();
      this.setLoad(false)
    },
      () => {
        this.setLoad(false)
        this.alertService.openSnackBar('Ops... Algo deu errado', 'alert-error')
      })
  }

  userCreate(user: IUsuario) {
    this.setLoad(true)
    this.usuarioService.create(user).subscribe(response => {
      this.alertService.openSnackBar(`Usuário cadastrado com sucesso!`, 'alert-success')
      this.onUserCreate.emit(response);
      this.dialog.closeAll();
      this.setLoad(false)
    },
      () => {
        this.setLoad(false)
        this.alertService.openSnackBar('Ops... Algo deu errado', 'alert-error')
      })
  }

  setLoad(status: boolean) {
    this.loading = status;
  }
}
