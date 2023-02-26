import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { AppComponent } from "../app.component";
declare var window:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  url: any = "";
  formModal:any;
  docTitle = document.title;

  

  constructor(private route: ActivatedRoute, private router: Router, private app:AppComponent) {
    this.url = route.snapshot.component?.name;
    if(this.url){
      this.app.isVisible = true;
    }

    window.addEventListener("blur",() => {
      document.title = "Come Back ;(";
    });
    window.addEventListener("focus",() => {
      document.title = this.docTitle;
    })
    
  }
  ngOnInit(): void {
    console.log(this.url);
    this.formModal = new window.bootstrap.Modal(document.getElementById('mymodal'));

    
  }



  signUp(){
    this.router.navigate(['./signup']);
    this.app.isVisible = true;
  }

  signIn(){
    this.router.navigate(['./signin']);
    this.app.isVisible = true;
    this.formModal.show();
  }
  saveSomeThing() {
    // confirm or save something
    this.formModal.hide();
  }

}

