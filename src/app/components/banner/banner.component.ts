import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
  // templateUrl: './banner.component.html',
  styleUrl: './banner.component.css',
  template: `
    <div class="landing-banner">
      <img src="/images/the-beacon.jpg" alt="" />
      <div class="banner-text">
        <div class="text-show">
          <div class="white-text">the beacon to all mankind</div>
        </div>
        <div class="text-show">
          <div class="black-text">Our website templates are created with</div>
        </div>
        <div class="text-show">
          <div class="black-text">
            inspiration, checked for quality and originality
          </div>
        </div>
        <div class="text-show">
          <div class="black-text">and meticulously sliced and coded.</div>
        </div>
        <div class="text-show">
          <a href="/">Read More</a>
        </div>
      </div>
    </div>
  `,
})
export class BannerComponent {}
