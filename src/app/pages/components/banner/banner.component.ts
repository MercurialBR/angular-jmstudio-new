import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {

  @Input()
  banner_img = ""

  @Input()
  title = ""

  @Input()
  sub_title = ""
}
