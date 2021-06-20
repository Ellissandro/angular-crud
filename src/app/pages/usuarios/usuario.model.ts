import { IUsuario } from 'src/shared/models/usuarios';
export class Usuario implements IUsuario {
    idusuario: number;
    primeironome: string;
    sobrenome: string;
    email: string;
    idade: number;
    sexo: string; constructor(usuario?: IUsuario) {
        this.idusuario = usuario?.idusuario;
        this.primeironome = usuario?.primeironome;
        this.sobrenome = usuario?.sobrenome;
        this.idade = usuario?.idade;
        this.email = usuario?.email;
        this.sexo = usuario?.sexo;
    }

}