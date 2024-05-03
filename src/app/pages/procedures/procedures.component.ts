import { Component } from '@angular/core';
import { NavBarComponent } from "../components/nav-bar/nav-bar.component";
import { BannerComponent } from "../components/banner/banner.component";
import { FooterComponent } from "../components/footer/footer.component";
import { ModelCourseComponent } from "../components/model-course/model-course.component";
import { GalleryComponent } from './../components/gallery/gallery.component';


@Component({
    selector: 'app-procedures',
    standalone: true,
    templateUrl: './procedures.component.html',
    styleUrl: './procedures.component.css',
    imports: [NavBarComponent, BannerComponent, FooterComponent, ModelCourseComponent, GalleryComponent]
})
export class ProceduresComponent {

}
