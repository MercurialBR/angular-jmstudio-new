import { Component } from '@angular/core';
import { NavBarComponent } from "../components/nav-bar/nav-bar.component";
import { BannerComponent } from "../components/banner/banner.component";
import { FooterComponent } from "../components/footer/footer.component";
import { ContactUsComponent } from "../components/contact-us/contact-us.component";

@Component({
    selector: 'app-contact',
    standalone: true,
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.css',
    imports: [NavBarComponent, BannerComponent, FooterComponent, ContactUsComponent]
})
export class ContactComponent {

}
