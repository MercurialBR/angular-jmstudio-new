import { Component } from '@angular/core';
import { CardDayComponent } from "./card-day/card-day.component";

@Component({
    selector: 'app-about-course',
    standalone: true,
    templateUrl: './about-course.component.html',
    styleUrl: './about-course.component.css',
    imports: [CardDayComponent]
})
export class AboutCourseComponent {

}
