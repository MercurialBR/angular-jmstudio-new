import { Component } from '@angular/core';
import { BannerComponent } from "../components/banner/banner.component";
import { NavBarComponent } from "../components/nav-bar/nav-bar.component";
import { CursoComponent } from "../components/curso/curso.component";
import { CardComponent } from "../components/card/card.component";
import { LocationComponent } from "../components/location/location.component";

@Component({
    selector: 'app-course',
    standalone: true,
    templateUrl: './course.component.html',
    styleUrl: './course.component.css',
    imports: [BannerComponent, NavBarComponent, CursoComponent, CardComponent, LocationComponent]
})
export class CourseComponent {

}
