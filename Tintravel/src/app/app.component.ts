import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tintravel';

  public isLogged: Boolean = false;

  constructor(
    public router: Router,
    private userService: UserService) {

  }

  ngOnInit(): void {

  }

  public onLogout(): void {
    this.userService.logoutUser();
    this.isLogged = false;
    this.router.navigate(['/home']);
  }




}


