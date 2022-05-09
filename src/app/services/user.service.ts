import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserModel} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private HttpClient: HttpClient) {
  }

  getAllUsers(): Observable<UserModel[]> {
    return this.HttpClient.get<UserModel[]>('https://jsonplaceholder.typicode.com/users');
  }
}
