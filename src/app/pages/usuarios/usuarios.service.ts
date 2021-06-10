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
        { id: Math.random().toString(), name: 'Hydrogen', email: 'junior@gmail.com', age: Math.floor(Math.random() * 100), gender: "M" },
        { id: Math.random().toString(), name: 'Helium', email: 'gabriel@gmail.com', age: Math.floor(Math.random() * 100), gender: "M" },
        { id: Math.random().toString(), name: 'Lithium', email: 'lucas@gmail.com', age: Math.floor(Math.random() * 100), gender: "M" },
        { id: Math.random().toString(), name: 'Beryllium', email: 'vinicius@gmail.com', age: Math.floor(Math.random() * 100), gender: "M" },
        { id: Math.random().toString(), name: 'Boron', email: 'douglas@gmail.com', age: Math.floor(Math.random() * 100), gender: "M" },
        { id: Math.random().toString(), name: 'Carbon', email: 'marta@gmail.com', age: Math.floor(Math.random() * 100), gender: "F" },
        { id: Math.random().toString(), name: 'Nitrogen', email: 'joao@gmail.com', age: Math.floor(Math.random() * 100), gender: "M" },
        { id: Math.random().toString(), name: 'Oxygen', email: 'amanda@gmail.com', age: Math.floor(Math.random() * 100), gender: "F" },
        { id: Math.random().toString(), name: 'Fluorine', email: 'julia@gmail.com', age: Math.floor(Math.random() * 100), gender: "F" },
        { id: Math.random().toString(), name: 'Neon', email: 'samira@gmail.com', age: Math.floor(Math.random() * 100), gender: "F" },
      ])
    })
  }
}
