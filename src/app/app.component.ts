import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jobportal';
  isLoggedIn!:boolean;
  user:any;
  check =  localStorage.getItem('userInfo')
  constructor(){
    // this.isLoggedIn  

    if(this.check !== null){
      this.isLoggedIn = true;
      this.user = JSON.parse(this.check);
    }else{
      this.isLoggedIn = false;
    }
    // console.log(JSON.parse);
  }

  logOut():void{
    this.isLoggedIn =false
    return localStorage.removeItem('userInfo');
  }

}
