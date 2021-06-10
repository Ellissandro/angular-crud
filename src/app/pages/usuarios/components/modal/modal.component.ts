import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  @Output() onUserCreate = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.userForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(100)]),
      name: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(40)]),
      surname: new FormControl('', [Validators.required, Validators.minLength(2)]),
      age: new FormControl('', [Validators.required, Validators.min(1)]),
      gender: new FormControl('', [Validators.required]),
    });
  }
  getErrorMessage(prop: string) {
    if (this.userForm.controls[prop].hasError('required')) {
      return 'Campo obrigatório';
    }

    return this.userForm.controls[prop].hasError(prop) ? 'Campo inválido' : '';
  }

  createNewUser(formData: IUsuario) {
    const user = new Usuario(formData.name, formData.surname, formData.age, formData.email, formData.gender)
    this.onUserCreate.emit(user);
  }
}
