import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomFontAwesomeModule } from './custom-font-awesome.module';
import { CustomMaterialModule } from './custom-material.module';




@NgModule({
  declarations: [],
  imports: [
    CustomMaterialModule,
    CustomFontAwesomeModule,
    NgbModule,
  ],
  exports: [
    CustomMaterialModule,
    CustomFontAwesomeModule,
    NgbModule,
  ]
})
export class SharedModule {

}
