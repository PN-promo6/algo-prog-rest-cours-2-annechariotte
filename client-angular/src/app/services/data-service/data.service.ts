import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../../models/user/user'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  public fetchUsers(): Observable<User[]> {
    let obsUsers: Observable<User[]> = this.httpClient.get<User[]>("http://localhost:3000/users");
    return obsUsers;
  }

  public fetchUserById(id: string): Observable<User[]> {
    let obsUserById: Observable<User[]> = this.httpClient.get<User[]>("http://localhost:3000/users/" + id);
    return obsUserById;
  }
}
