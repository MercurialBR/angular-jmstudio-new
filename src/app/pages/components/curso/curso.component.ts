import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  standalone: true,
  imports: [],
  templateUrl: './curso.component.html',
  styleUrl: './curso.component.css'
})
export class CursoComponent {

  @Input()
  title = ""

  @Input()
  sub_title = ""

  @Input()
  image1 = ""

  @Input()
  image2 = ""

  @Input()
  image3 = ""

  @Input()
  image4 = ""

  @Input()
  image5 = ""

  @Input()
  image6 = ""
}
