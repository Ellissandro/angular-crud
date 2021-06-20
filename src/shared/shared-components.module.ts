import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';
import { HeaderComponent } from './shared-components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogConfirmComponent } from './shared-components/dialog-confirm/dialog-confirm.component';
import { LoadingComponent } from './shared-components/loading/loading.component';
import { SidebarComponent } from './shared-components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';


@NgModule({
    exports: [
        HeaderComponent,
        LoadingComponent,
        SidebarComponent
    ],
    imports: [
        MatToolbarModule,
        MatIconModule,
        MatDialogModule,
        CommonModule,
        MatIconModule,
        RouterModule
    ],
    declarations: [
        HeaderComponent,
        DialogConfirmComponent,
        LoadingComponent,
        SidebarComponent
    ]
})
export class SharedComponentsModule { }
