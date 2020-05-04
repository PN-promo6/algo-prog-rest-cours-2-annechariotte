import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data-service/data.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users = [];
  id = "5eaecda0cba960e77fc9f205";

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.fetchUsers()
      .subscribe(
        (res) => {
          // console.log(res);
          this.users = res;
        },
        (error) => {
          console.log(error);

        }
      );

    this.dataService.fetchUserById(this.id)
      .subscribe(
        (res) => {
          console.log(res);
        },
        (error) => {
          console.log(error);

        }
      );
  }

}
