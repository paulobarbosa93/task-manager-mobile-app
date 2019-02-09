import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'home',
  moduleId: module.id,
  templateUrl: './home.component.html'
})

export class HomeComponent {
  public constructor(private router: Router, private authService: AuthService){ }

  public signOutUser(): void{
    this.authService.signOut().subscribe(
      () => this.router.navigate(['/sign-in'])
    );
  }
}
