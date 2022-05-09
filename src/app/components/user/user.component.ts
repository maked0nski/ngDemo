import {Component} from '@angular/core';
import {UserModel} from "../../models/user.model";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  users: UserModel[] = [];

  constructor(private userService: UserService) {
    userService.getAllUsers().subscribe(jsonUsers => this.users = jsonUsers)
  }

  ngOnInit(): void {
  }

}
