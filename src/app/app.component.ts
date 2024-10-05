import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { LinksComponent } from './components/links/links.component';
import { BannerComponent } from './components/banner/banner.component';
import { DataComponent } from './components/data/data.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    LogoComponent,
    LinksComponent,
    BannerComponent,
    DataComponent,
    FooterComponent,
  ],
  // templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  template: `
    <app-header></app-header>
    <app-logo></app-logo>
    <app-links></app-links>
    <app-banner></app-banner>
    <app-data></app-data>
    <app-footer></app-footer>
  `,
})
export class AppComponent {
  title = 'angular-project';
}
