import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor() { }

  getData() {
    return new Observable<any>(observer => {
      observer.next([
        { id: Math.random().toString(), name: 'Hydrogen', email: 'junior@gmail.com', idade: Math.floor(Math.random() * 100), sexo: "M" },
        { id: Math.random().toString(), name: 'Helium', email: 'gabriel@gmail.com', idade: Math.floor(Math.random() * 100), sexo: "M" },
        { id: Math.random().toString(), name: 'Lithium', email: 'lucas@gmail.com', idade: Math.floor(Math.random() * 100), sexo: "M" },
        { id: Math.random().toString(), name: 'Beryllium', email: 'vinicius@gmail.com', idade: Math.floor(Math.random() * 100), sexo: "M" },
        { id: Math.random().toString(), name: 'Boron', email: 'douglas@gmail.com', idade: Math.floor(Math.random() * 100), sexo: "M" },
        { id: Math.random().toString(), name: 'Carbon', email: 'marta@gmail.com', idade: Math.floor(Math.random() * 100), sexo: "F" },
        { id: Math.random().toString(), name: 'Nitrogen', email: 'joao@gmail.com', idade: Math.floor(Math.random() * 100), sexo: "M" },
        { id: Math.random().toString(), name: 'Oxygen', email: 'amanda@gmail.com', idade: Math.floor(Math.random() * 100), sexo: "F" },
        { id: Math.random().toString(), name: 'Fluorine', email: 'julia@gmail.com', idade: Math.floor(Math.random() * 100), sexo: "F" },
        { id: Math.random().toString(), name: 'Neon', email: 'samira@gmail.com', idade: Math.floor(Math.random() * 100), sexo: "F" },
      ])
    })
  }
}
