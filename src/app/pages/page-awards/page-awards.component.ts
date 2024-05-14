import { Component } from '@angular/core';
import { NavBarComponent } from "../components/nav-bar/nav-bar.component";
import { BannerComponent } from "../components/banner/banner.component";
import { FooterComponent } from "../components/footer/footer.component";
import { LocationComponent } from "../components/location/location.component";
import { GalleryComponent } from "../components/gallery/gallery.component";

@Component({
    selector: 'app-page-awards',
    standalone: true,
    templateUrl: './page-awards.component.html',
    styleUrl: './page-awards.component.css',
    imports: [NavBarComponent, BannerComponent, FooterComponent, LocationComponent, GalleryComponent]
})
export class PageAwardsComponent {

}
