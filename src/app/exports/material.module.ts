import { NgModule } from '@angular/core';

import {
  MatDialogModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatProgressSpinnerModule
} from "@angular/material"

@NgModule({
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatProgressSpinnerModule
  ]
})

export class MaterialModule { }
