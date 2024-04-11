import { Component } from '@angular/core';
import { NavBarComponent } from "../components/nav-bar/nav-bar.component";
import { BannerComponent } from "../components/banner/banner.component";
import { CardComponent } from "../components/card/card.component";
import { CursoComponent } from "../components/curso/curso.component";
import { StudioComponent } from "../components/studio/studio.component";
import { LocationComponent } from "../components/location/location.component";
import { FooterComponent } from "../components/footer/footer.component";


@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [NavBarComponent, BannerComponent, CardComponent, CursoComponent, StudioComponent, LocationComponent, FooterComponent]
})
export class HomeComponent {

}
