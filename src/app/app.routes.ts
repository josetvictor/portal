import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { MainComponent } from './pages/main/main.component';

export const routes: Routes = [
    {path: '', redirectTo:'/main', pathMatch: 'full'},
    {path: 'main', component: MainComponent},
    {path: 'about', component: AboutComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'portfolio', component: PortfolioComponent},
    {path: 'resume', component: ResumeComponent},
    {path: '**', component: PageNotFoundComponent}
];
