import { Component } from '@angular/core';
import { NavBarComponent } from "../components/nav-bar/nav-bar.component";
import { BannerComponent } from "../components/banner/banner.component";
import { FooterComponent } from "../components/footer/footer.component";
import { GalleryComponent } from "../components/gallery/gallery.component";

@Component({
    selector: 'app-procedures-sob',
    standalone: true,
    templateUrl: './procedures-sob.component.html',
    styleUrl: './procedures-sob.component.css',
    imports: [NavBarComponent, BannerComponent, FooterComponent, GalleryComponent]
})
export class ProceduresSobComponent {

}
