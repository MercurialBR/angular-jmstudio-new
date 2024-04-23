import { Component } from '@angular/core';
import { PhotosComponent } from "./photos-model_1/photos.component";
import { PhotosModel2Component } from "./photos-model-2/photos-model-2.component";

@Component({
    selector: 'app-gallery',
    standalone: true,
    templateUrl: './gallery.component.html',
    styleUrl: './gallery.component.css',
    imports: [PhotosComponent, PhotosModel2Component]
})
export class GalleryComponent {

}
