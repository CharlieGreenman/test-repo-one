import { Component } from '@angular/core';
import { AuthService } from "@test-repo-one/common/common-services";

@Component({
  selector: 'test-repo-one-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'test-repo-one';

  constructor(private authService: AuthService) {
  }

  logIn() {
    this.authService.loginWithRedirect()
  }

  signUp() {
    this.authService.signUpWithRedirect();
  }
}
