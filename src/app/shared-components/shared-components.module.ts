
import { NgModule } from '@angular/core';

import { DialogConfirmComponent } from './components/dialog-confirm/dialog-confirm.component';
import { HeaderComponent } from './header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
    exports: [
        HeaderComponent
    ],
    imports: [
        MatToolbarModule,
        MatIconModule,
        MatDialogModule
    ],
    declarations: [
        HeaderComponent,
        DialogConfirmComponent,
    ]
})
export class SharedComponentsModule { }
