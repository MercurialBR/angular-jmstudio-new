import { Component } from '@angular/core';
import { NavBarComponent } from "../components/nav-bar/nav-bar.component";
import { BannerComponent } from "../components/banner/banner.component";
import { FooterComponent } from "../components/footer/footer.component";

@Component({
    selector: 'app-procedures-lash',
    standalone: true,
    templateUrl: './procedures-lash.component.html',
    styleUrl: './procedures-lash.component.css',
    imports: [NavBarComponent, BannerComponent, FooterComponent]
})
export class ProceduresLashComponent {

}
