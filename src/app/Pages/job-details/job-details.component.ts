import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Job } from 'src/app/interfaces/job';
import { JobSeekerService } from 'src/app/services/job-seeker.service';
import { JobsService } from 'src/app/services/jobs.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit{
  job!:Job;
  id!:number;
  isLoggedIn!:boolean;
  userInfo = localStorage.getItem('userInfo');
  userInfoObj: any;
  application: any;

  constructor(private jobService: JobsService,private waganyu : JobSeekerService, private route: ActivatedRoute){
    if (this.userInfo) {
      this.userInfoObj = JSON.parse(this.userInfo);
    }    
    this.application =  {
      ApplicationId: 0,
      JobId: this.job.jobId,
      JobSeekerId: this.userInfoObj.jobSeekerID, 
      AppliedDate: new Date(),
      ApplicationStatus: "active"
    }
  }

  ngOnInit(): void {
     this.route.paramMap.subscribe({
      next: (param) =>{
         this.id = Number(param.get('id'));

         this.jobService.getJobById(this.id).subscribe({
          next: (resp:any) => {
            if(resp.result){
                this.job = resp.data;
                // console.log(resp.data)
            }else{
             return  alert('job not found');
            }
          },
          error: (error: any)=>{
            return console.log(error)
          }
        })


      },
      error: (error: any) => {
        console.log(error);
      }
     }) 

     if(this.userInfo !== null){
      this.isLoggedIn = true;
      this.userInfoObj = JSON.parse(this.userInfo);
     }else{
      this.isLoggedIn = false
     }
  }

  apply(){
      this.waganyu.sendJobApplication(this.application).subscribe((response : any )=>{
          if(response.resul){
             alert("successfully applied to job ");
          }
            alert("theres an error with the request");
      })
  }
}
