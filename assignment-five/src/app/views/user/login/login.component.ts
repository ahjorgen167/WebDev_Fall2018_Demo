import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {User} from '../../../models/user.model.client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: String;
  password: String;
  hello: String = 'hello from components!';
  errorFlag: boolean;

  users = [
    "bob",
    "vamsi",
    "jie",
    "hunter"
  ];

  reorderWidgets(event) {
    console.log(event.endIndex);
    console.log(event.startIndex);
  }

  constructor(private userService: UserService, private router: Router) {}

  login(username: String, password: String) {
      this.userService.login(username, this.password)
        .subscribe(
          data => {
            this.errorFlag = false;
            this.router.navigate(['/profile']);
          },
            (error: any) => {
              this.errorFlag = true;
            }
        });
  }

  ngOnInit(){

  }



}
