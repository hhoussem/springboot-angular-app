import {Component, Input} from '@angular/core';
import {UserProfile} from "../../model/user-profile";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'profile',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  @Input()
  profile?: UserProfile
}
