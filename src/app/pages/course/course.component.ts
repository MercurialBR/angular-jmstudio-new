import { Component } from '@angular/core';
import { BannerComponent } from "../components/banner/banner.component";
import { NavBarComponent } from "../components/nav-bar/nav-bar.component";
import { CursoComponent } from "../components/curso/curso.component";
import { CardComponent } from "../components/card/card.component";
import { LocationComponent } from "../components/location/location.component";
import { ModelCourseComponent } from "../components/model-course/model-course.component";
import { FooterComponent } from "../components/footer/footer.component";
import { AboutCourseComponent } from "../components/about-course/about-course.component";
import { IncludedCourseComponent } from "../components/included-course/included-course.component";
import { FloatingButtonComponent } from "../components/floating-button/floating-button.component";
import { GalleryComponent } from "../components/gallery/gallery.component";

@Component({
    selector: 'app-course',
    standalone: true,
    templateUrl: './course.component.html',
    styleUrl: './course.component.css',
    imports: [BannerComponent, NavBarComponent, CursoComponent, CardComponent, LocationComponent, ModelCourseComponent, FooterComponent, AboutCourseComponent, IncludedCourseComponent, FloatingButtonComponent, GalleryComponent]
})
export class CourseComponent {

}
