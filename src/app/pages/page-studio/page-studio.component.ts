import { Component } from '@angular/core';
import { NavBarComponent } from "../components/nav-bar/nav-bar.component";
import { BannerComponent } from "../components/banner/banner.component";
import { GalleryComponent } from "../components/gallery/gallery.component";
import { FooterComponent } from "../components/footer/footer.component";
import { LocationComponent } from "../components/location/location.component";

@Component({
    selector: 'app-page-studio',
    standalone: true,
    templateUrl: './page-studio.component.html',
    styleUrl: './page-studio.component.css',
    imports: [NavBarComponent, BannerComponent, GalleryComponent, FooterComponent, LocationComponent]
})
export class PageStudioComponent {

}
