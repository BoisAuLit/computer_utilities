import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShortcutsComponent } from './shortcuts/shortcuts.component';

const routes: Routes = [
  {path: 'shortcuts', component: ShortcutsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
