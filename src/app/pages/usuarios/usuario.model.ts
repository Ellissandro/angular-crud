import { IUsuario } from 'src/app/shared-components/models/usuarios';
export class Usuario implements IUsuario {
    public id: string;
    public name: string;
    public surname: string;
    public age: number;
    public email: string;
    public gender: string;
    constructor(id?: string, name?: string, surname?: string, age?: number, email?: string, gender?: string) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.email = email;
        this.gender = gender;
    }

}