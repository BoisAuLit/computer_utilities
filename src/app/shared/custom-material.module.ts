import { NgModule } from '@angular/core';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [],
  imports: [
    MatGridListModule,
    MatButtonModule,
    MatTableModule
  ],
  exports: [
    MatGridListModule,
    MatButtonModule,
    MatTableModule
  ]
})
export class CustomMaterialModule { }
