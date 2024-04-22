
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { CourseComponent } from './pages/course/course.component';
import { FloatingButtonComponent } from "./pages/components/floating-button/floating-button.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HomeComponent, CourseComponent, FloatingButtonComponent]
})
export class AppComponent {
  title = 'angular-jmstudio-new';
}
