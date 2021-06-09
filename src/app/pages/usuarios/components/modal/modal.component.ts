import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email, Validators.maxLength(100)]);
  name = new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(40)]);
  surname = new FormControl('', [Validators.required, Validators.minLength(2)]);
  age = new FormControl('', [Validators.required, Validators.min(1)]);
  sexo = new FormControl('', [Validators.required]);
  gender = new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(1)]);
  constructor() { }

  ngOnInit(): void {
  }

  getErrorMessage(prop: string) {
    if (this[prop].hasError('required')) {
      return 'Campo obrigatório';
    }

    return this[prop].hasError(prop) ? 'Campo inválido' : '';
  }
}
