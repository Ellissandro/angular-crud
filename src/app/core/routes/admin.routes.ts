import { Routes } from '@angular/router';

export const ADMIN_ROUTES: Routes = [
    {
        path: 'usuarios',
        loadChildren: () => import('../../pages/usuarios/usuarios.module').then(m => m.UsuariosModule)
    }
]