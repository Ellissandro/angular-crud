import { ADMIN_ROUTES } from './core/routes/admin.routes';
import { AdminLayoutComponent } from './core/layout/admin/admin-layout/admin-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'admin/usuarios',
    pathMatch: 'full'
  },
  { path: 'admin', component: AdminLayoutComponent, children: ADMIN_ROUTES },
  { path: '**', redirectTo: 'admin/usuarios' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
