import { Component } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'html-navbar',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class NavbarComponent {

  constructor(private router: Router) {
  }
  logout() {
    const confirmation= confirm('Voulez vous vous déconnecter');
    if (confirmation) {
      localStorage.removeItem('token');
      this.router.navigateByUrl('/signin');
    }
  }
}
