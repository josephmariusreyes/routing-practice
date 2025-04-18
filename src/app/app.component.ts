import { ChangeDetectorRef, Component, computed, effect, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone:false
})
export class AppComponent implements OnInit {
  title = 'routing-practice';
  isLoggedIn = false;
  isAdmin = false;

  constructor(
    private auth:AuthService,
    private cdr:ChangeDetectorRef
  ) {
    effect(() => {
      const isLoggedIn = this.auth.loggedIn();
      const isAdmin = this.auth.admin();
      console.log(`User logged in: ${isLoggedIn}, Admin: ${isAdmin}`);

      this.isLoggedIn = isLoggedIn;
      this.isAdmin = isAdmin;
      this.cdr.markForCheck();
    });

  }

  ngOnInit(): void {
    this.isLoggedIn = this.auth.loggedIn();
    this.isAdmin = this.auth.admin();
  }
  
  onLogout() {
    this.auth.logout();
  }
  // showAdminBanner = computed(() => {
  //   return this.auth.loggedIn() && this.auth.admin();
  // });

}
