import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {

  menuOpen = signal<boolean>(false);

  toggleMenu() {
    this.menuOpen.update(m => !m);
  }

}
