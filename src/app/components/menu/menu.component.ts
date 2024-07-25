import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  isMenuOpen = false;
  constructor(
    public router: Router
  ){}

  toggleMenu()
  {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu()
  {
    this.isMenuOpen = false;
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: Event) {
    const target = event.target as HTMLElement;
    const insideMenu = target.closest('nav');
    if (!insideMenu) {
      this.closeMenu();
    }
  }
}
