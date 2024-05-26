import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {ProfileComponent} from "./components/profile/profile.component";
import {UserProfile} from "./model/user-profile";
import {UserService} from "./services/user.service";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'frontend';

  public userProfile?: UserProfile;
  constructor(private userService: UserService) {
    userService.getUserProfile().subscribe((userProfile: UserProfile) => this.userProfile = userProfile);
  }
}
