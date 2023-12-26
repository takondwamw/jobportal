import { Component } from '@angular/core';
import { JobsService } from 'src/app/services/jobs.service';

@Component({
  selector: 'app-jobs-create',
  templateUrl: './jobs-create.component.html',
  styleUrls: ['./jobs-create.component.css']
})
export class JobsCreateComponent {

  jobObj:any= {
    "JobId": 0,
    "JobName": "",
    "CreatedDate" : new Date(),
    "EmployerId": 0,
    "CategoryId": 0,
    "Experience": "",
    "Package": "",
    "Location": "",
    "JobDescription": "",
    "IsActive": true
  }

  jobCategory: any;

  constructor(private jobService: JobsService){
    this.jobService.getJobCategory().subscribe({
      next: (resp: any )=>{
        this.jobCategory = resp.data;
        console.log(resp.data);
      },
      error: (error: any) =>{ 
        console.log(error);
      }
    })
  }

}
