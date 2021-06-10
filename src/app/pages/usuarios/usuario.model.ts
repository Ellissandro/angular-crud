export class Usuario {
    private name: string;
    private surname: string;
    private age: number;
    private email: string;
    private gender: string;
    constructor(name: string, surname: string, age: number, email: string, gender: string) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.email = email;
        this.gender = gender;
    }
}