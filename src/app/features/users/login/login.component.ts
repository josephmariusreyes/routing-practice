import { ChangeDetectorRef, Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone:false
})
export class LoginComponent {

    constructor(
        private auth:AuthService,
        private cdr:ChangeDetectorRef
    ) {
    }

    onLogin(loggedInAsAdmin:boolean = false) {
        this.auth.login(loggedInAsAdmin);
        this.cdr.detectChanges();
    }
}