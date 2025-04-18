import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private isLoggedIn = signal<boolean>(false);
  private isAdmin = signal<boolean>(false);

  login(admin = false) {
    this.isLoggedIn.set(true);
    //mariustodo: Login related
    //Store some information in local storage, this is a good practice to try out the local storage
    this.isAdmin.set(admin);
  }

  logout() {
    this.isLoggedIn.set(false);
    this.isAdmin.set(false);
  }

  get loggedIn() {
    return this.isLoggedIn;
  }

  get admin() {
    return this.isAdmin;
  }
}
