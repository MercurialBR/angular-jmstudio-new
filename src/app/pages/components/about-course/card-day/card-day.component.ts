import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-day',
  standalone: true,
  imports: [],
  templateUrl: './card-day.component.html',
  styleUrl: './card-day.component.css'
})
export class CardDayComponent {
  @Input()
  title = ""

  @Input()
  sub_title1 = ""

  @Input()
  sub_title2 = ""

  @Input()
  sub_title3 = ""

  @Input()
  sub_title4 = ""
}
