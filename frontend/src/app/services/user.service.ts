import { Injectable } from '@angular/core';
import {first, Observable} from "rxjs";
import {UserProfile} from "../model/user-profile";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  USER_PROFILE_PATH: string = '/api/user/profile';

  constructor(private http: HttpClient) {
  }

  getUserProfile(): Observable<UserProfile> {
    return this.http.get<UserProfile>(this.USER_PROFILE_PATH).pipe(
      first()
    );
  }
}
