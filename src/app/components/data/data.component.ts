import { Component } from '@angular/core';

@Component({
  selector: 'app-data',
  standalone: true,
  imports: [],
  // templateUrl: './data.component.html',
  styleUrl: './data.component.css',
  template: `
    <div class="cards">
      <div class="card">
        <img src="/images/the-father.jpg" alt="The Actor" />
        <p>The Father</p>
      </div>
      <div class="card">
        <img src="/images/the-actor.jpg" alt="The Actor" />
        <p>The Actor</p>
      </div>
      <div class="card">
        <img src="/images/the-nerd.jpg" alt="The Actor" />
        <p>The Nerd</p>
      </div>
    </div>
  `,
})
export class DataComponent {}
