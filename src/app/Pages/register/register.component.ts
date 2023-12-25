import { HttpClient } from '@angular/common/http';
import { Component , OnInit } from '@angular/core';
import { Company } from 'src/app/interfaces/company';
import { CompanyService } from 'src/app/services/company.service';
import { FormGroup , FormBuilder, Validators } from '@angular/forms';
import { JobSeekerService } from 'src/app/services/job-seeker.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    companyForm!: FormGroup;  
    jobSeekerForm!: FormGroup;
    sMessage!:string;
    eMessage!:string;
    id:number = Math.floor((Math.random()*1000));
    // isjobSeeker: boolean = false;
    isHiring!: boolean;

    constructor(private companyService: CompanyService, private jobSeekerService: JobSeekerService, private _http: HttpClient,private _fb: FormBuilder){ 
      this.companyForm = this._fb.group({
        employerId: this.id,
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
      }) ;
      
      
      this.jobSeekerForm = this._fb.group({
        JobSeekerID: 0,
        FullName: ['', Validators.required],
        EmailId: ['',Validators.required],
        MobileNo: ['',Validators.required],
        ExperienceStatus: ['',Validators.required],
        ResumeUrl: ['',Validators.required],
        // JobSeekerSkill: ['',Validators.required],
      })

      // console.log(this.id);
    }



    register(){
      if(this.companyForm.valid){
        // alert("yes")
        console.log(this.companyForm.value);
        this.companyService.addNewCompany(this.companyForm.value).subscribe({
          next: (resp: any)=>{
            console.log(resp.message);
            if(resp.result == true) {
              return this.sMessage = resp.message;
            }else{
              return this.eMessage = resp.message;
            }
          },
          error: (error) => {
            console.error(error);
            return this.eMessage = error;
          }
        })
      }
  
    }

    registerJSeeker(){
        // this.jobService.registerAsJobSeeker()
        if(this.jobSeekerForm.valid){
          this.jobSeekerService.registerAsJobSeeker(this.jobSeekerForm.value).subscribe({
            next: (resp:any)=>{
                  if(resp.result == true){
                    this.sMessage = resp.message;
                  }
            },
            error: (error:any)=>{
               return this.eMessage = error;
            }
          })
        }
    }

    ngOnInit(): void {
    }
    
}
