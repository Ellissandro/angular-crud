
import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
    exports: [
        HeaderComponent
    ],
    imports: [
        MatToolbarModule,
        MatIconModule,
    ],
    declarations: [
        HeaderComponent
    ]
})
export class SharedComponentsModule { }
