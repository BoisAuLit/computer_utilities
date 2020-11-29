import { NgModule } from '@angular/core';

// **********************************************************************
// Font Awesome
// Modules
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

// Icons
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { faSquare as farSquare, faCheckSquare as farCheckSquare } from '@fortawesome/free-regular-svg-icons';

import { faChrome } from '@fortawesome/free-brands-svg-icons';

// **********************************************************************


@NgModule({
  declarations: [],
  imports: [
    FontAwesomeModule,
  ],
  exports: [
    FontAwesomeModule,
  ]
})
export class CustomFontAwesomeModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons();
  }
}
