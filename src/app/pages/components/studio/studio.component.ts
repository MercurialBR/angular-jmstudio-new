import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-studio',
  standalone: true,
  imports: [],
  templateUrl: './studio.component.html',
  styleUrl: './studio.component.css'
})
export class StudioComponent {
  @Input()
  background_image = ""

  @Input()
  title = ""

  @Input()
  sub_title = ""
}
