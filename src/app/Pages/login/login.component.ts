import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  loginForm!: FormGroup;
  sMessage!:string;
  eMessage!: string;


  constructor(private _http: HttpClient, private _fb: FormBuilder){

    this.loginForm = this._fb.group({
      userName: ['',Validators.required],
      Password: ['',Validators.required],
    })
  }

  login(){
    if(this.loginForm.valid && this.loginForm.value !== null){
       this._http.post(`${environment._baseUrl}/Login`,this.loginForm.value).subscribe({
        next: (resp:any) =>{
            if(resp.result == true){
              // alert(resp.message);
              return this.sMessage = resp.message;

            }else{
              this.sMessage = resp.data;
            }
       
        },
        error: (error:any)=>{
          console.log(error);
          return this.eMessage = error;
        }
       })
    }
  }
}
