import { localStorageService } from './../../shared/localStorage.service';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  name : string;

  constructor(private userService: UserService, private storageService: localStorageService) {
    this.name = this.storageService.get(name);
  }

  ngOnInit() {
  }
 // clear session and clean storage
  logOut(){
    return this.userService.logout();
  }

}
