import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../auth/user.service';
import { Observable } from 'rxjs/Rx';
import { localStorageService } from '../shared/localStorage.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  date = new Date();
  name : string;
  private status: {isopen: boolean} = {isopen: false};

  constructor(private userService: UserService, private router: Router, private localStorageService: localStorageService) {
    this.name = localStorageService.get('name');
    Observable.interval(1000)
      .subscribe(() => {this.date = new Date(); });
  }

  ngOnInit() {}

  logout() {
    this.userService.logout();
  }

}
