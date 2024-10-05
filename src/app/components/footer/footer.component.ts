import { NgClass, NgComponentOutlet } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  // templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  template: `
    <footer>
      <p>© 2023 by Mustacchio. All rights reserved.</p>
      <div class="social-links">
        <a href="https://www.twitter.com" class="twitter-box"> </a>
        <a href="https://www.facebook.com" class="facebook-box"> </a>
        <a href="https://www.google.com" class="google-box"> </a>
        <a href="https://www.pintrest.com" class="pinterest-box"> </a>
      </div>
    </footer>
  `,
})
export class FooterComponent {}
