import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: any;
  age: number;
  btnName: string;
  isShow: boolean;
  name: string;

  constructor(
    private data: DataService
  ) { }

  ngOnInit() {
    this.users = this.data.getUsers();
    this.btnName = 'Add new user';
    this.isShow = false;

  }


  showForm() {
    this.isShow = this.isShow == true ? false : true;
    this.btnName = this.isShow == true ? 'Hide form ' : 'Add new user'
  }

  addNewUser() {
    if (this.name != undefined) {
      let user = {
        id: this.users.length + 1,
        name: this.name
      };
      this.users.push(user);
      this.name = "";
      this.btnName = "Add new user";
      this.isShow = false;
    } else {
      alert('Please type the user name!')
    }

  }

  deleteUser(user) {
    this.users.splice(user, 1)
  }
}
