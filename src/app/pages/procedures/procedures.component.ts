import { Component } from '@angular/core';
import { NavBarComponent } from "../components/nav-bar/nav-bar.component";
import { BannerComponent } from "../components/banner/banner.component";
import { FooterComponent } from "../components/footer/footer.component";

@Component({
    selector: 'app-procedures',
    standalone: true,
    templateUrl: './procedures.component.html',
    styleUrl: './procedures.component.css',
    imports: [NavBarComponent, BannerComponent, FooterComponent]
})
export class ProceduresComponent {

}
