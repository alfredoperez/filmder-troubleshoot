import { Component, Input } from '@angular/core';

@Component({
  selector: 'rating-decimal',
  templateUrl: './rating-decimal.component.html',
  styleUrls: ['./rating-decimal.component.css'],
})
export class RatingDecimalComponent {
  @Input() rate!: number;
}
