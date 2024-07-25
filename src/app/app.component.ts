import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { MainComponent } from './pages/main/main.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    AboutComponent,
    BlogComponent,
    PageNotFoundComponent,
    PortfolioComponent,
    ResumeComponent,
    MainComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(public router: Router) {}

  title = 'portal';
  isMenuVisible = false;

  toggleMenu(){
    this.isMenuVisible = !this.isMenuVisible
  }
}
