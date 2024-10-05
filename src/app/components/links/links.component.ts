import { Component } from '@angular/core';

@Component({
  selector: 'app-links',
  standalone: true,
  imports: [],
  // templateUrl: './links.component.html',
  styleUrl: './links.component.css',
  template: `
    <nav class="links">
      <a href="/home" class="active">Home</a>
      <a href="/about" class="text-primary">About</a>
      <a href="/contact">Gallery</a>
      <a href="/blog">Blog</a>
      <a href="/contact">Contact</a>
    </nav>
  `,
})
export class LinksComponent {}
