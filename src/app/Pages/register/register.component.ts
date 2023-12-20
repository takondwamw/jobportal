import { HttpClient } from '@angular/common/http';
import { Component , OnInit } from '@angular/core';
import { Company } from 'src/app/interfaces/company';
import { CompanyService } from 'src/app/services/company.service';
import { FormGroup , FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    companyForm!: FormGroup;  

    constructor(private companyService: CompanyService, private _http: HttpClient,private _fb: FormBuilder){ 
      this.companyForm = this._fb.group({
        companyName: ['', Validators.required],
        emailId: ['',Validators.required],
        phoneNo: ['',Validators.required],
        mobileNo: ['',Validators.required],
        city: ['',Validators.required],
        state: ['',Validators.required],
        logoUrl: ['',Validators.required],
        gstNo: ['',Validators.required],
        pinCode: ['',Validators.required],
        companyAddress: ['',Validators.required]
      })    
    }

    register(){
      if(this.companyForm.valid){
        // alert("yes")
        console.log(this.companyForm.value);
        this.companyService.addNewCompany(this.companyForm.value).subscribe({
          next: (resp: any)=>{
            console.log(resp);
          },
          error: (error) => {
            console.error(error);
          }
        })
      }
  
    }

    ngOnInit(): void {
    }
}
