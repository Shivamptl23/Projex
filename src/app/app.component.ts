import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from './services/users.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {



  ngOnInit(): void {

  }
  title = 'Projex';


  isadmin = false;
  isVisible = false;
  opened = false;
  showChatbox = false;
  messages: string[] = [];
  newMessage = "";

  constructor(private router: Router, private service: UsersService) { }

  toggleDarkTheme(): void {
    console.log("Dark Mode");
    document.body.classList.toggle('dark-theme');
  }
  openChatbox() {
    this.showChatbox = true;
  }

  ngDoCheck(): void {
    if (this.service.getUserrole() == 'admin') {
      this.isadmin = true;
    } else{
      this.isadmin = false;
    }
  }

  closeChatbox() {
    this.showChatbox = false;
  }

  sendMessage() {
    if (this.newMessage.length != 0) {
      this.messages.push(this.newMessage);
      this.newMessage = '';
    }
  }
  logout() {
    sessionStorage.clear();
    this.router.navigate(['']);
  }
}
