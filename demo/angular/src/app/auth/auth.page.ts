import { Component } from '@angular/core';

import type { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
  standalone: false,
})
export class AuthPage {
  constructor(public auth: AuthService) {}

  signIn(): void {
    this.auth.signIn();
  }
}
