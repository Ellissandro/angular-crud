import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';

import { DialogConfirmComponent } from './components/dialog-confirm/dialog-confirm.component';
import { HeaderComponent } from './header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { LoadingComponent } from './components/loading/loading.component';


@NgModule({
    exports: [
        HeaderComponent,
        LoadingComponent
    ],
    imports: [
        MatToolbarModule,
        MatIconModule,
        MatDialogModule,
        CommonModule
    ],
    declarations: [
        HeaderComponent,
        DialogConfirmComponent,
        LoadingComponent,
    ]
})
export class SharedComponentsModule { }
