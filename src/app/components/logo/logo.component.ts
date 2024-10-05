import { Component } from '@angular/core';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [],
  // templateUrl: './logo.component.html',
  styleUrl: './logo.component.css',
  template: `
    <div class="logo">
      <img src="/images/logo.jpg" alt="">
    </div>
  `
})
export class LogoComponent {

}
