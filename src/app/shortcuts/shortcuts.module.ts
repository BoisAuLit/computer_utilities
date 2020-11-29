import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShortcutsComponent } from './shortcuts.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ShortcutsComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ShortcutsModule { }
