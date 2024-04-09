import { Component } from '@angular/core';
import { NavBarComponent } from "../components/nav-bar/nav-bar.component";
import { BannerComponent } from "../components/banner/banner.component";
import { CardComponent } from "../components/card/card.component";
import { CursoComponent } from "../components/curso/curso.component";


@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [NavBarComponent, BannerComponent, CardComponent, CursoComponent]
})
export class HomeComponent {

}
