import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CommonModule } from '@angular/common';
import { RatingDecimalComponent } from './rating-decimal.component';

@NgModule({
  imports: [CommonModule, NgbModule],
  declarations: [RatingDecimalComponent],
  exports: [RatingDecimalComponent],
})
export class RatingDecimalModule {}
