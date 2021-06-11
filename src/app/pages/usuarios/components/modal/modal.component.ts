import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IUsuario } from 'src/app/shared-components/models/usuarios';
import { Usuario } from '../../usuario.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  userForm: FormGroup;
  user: IUsuario;
  @Output() onUserCreate = new EventEmitter<IUsuario>();
  constructor() { }

  ngOnInit(): void {
    this.initForm(this.user);
  }

  initForm(user: IUsuario = new Usuario()) {
    this.userForm = new FormGroup({
      id: new FormControl(user.id, []),
      email: new FormControl(user.email, [Validators.required, Validators.email, Validators.maxLength(100)]),
      name: new FormControl(user.name, [Validators.required, Validators.minLength(2), Validators.maxLength(40)]),
      surname: new FormControl(user.surname, [Validators.required, Validators.minLength(2)]),
      age: new FormControl(user.age, [Validators.required, Validators.min(1)]),
      gender: new FormControl(user.gender, [Validators.required]),
    });
  }
  getErrorMessage(prop: string) {
    if (this.userForm.controls[prop].hasError('required')) {
      return 'Campo obrigatório';
    }

    return this.userForm.controls[prop].hasError(prop) ? 'Campo inválido' : '';
  }

  createNewUser(formData: IUsuario) {
    const user = new Usuario(formData.id, formData.name, formData.surname, formData.age, formData.email, formData.gender)
    this.onUserCreate.emit(user);
  }
}
