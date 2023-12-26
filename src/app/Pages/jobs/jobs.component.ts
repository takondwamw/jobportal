import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/interfaces/job';
import { JobsService } from 'src/app/services/jobs.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  activeJobs!: Job[];
  allJobs!: Job[];
  jobs: Job[] = [];
  isLoading!:boolean;

  constructor(private _jobService: JobsService ){
    this.isLoading = true;
    this._jobService.Activejobs().subscribe({
      next: (resp: any)=>{
        this.isLoading =false;
        // console.log(resp.data);

        this.activeJobs = resp.data;
      },
      error: (error:any)=>{
        console.log(error);
      }
    })


    this._jobService.allJobs().subscribe({
      next: (resp: any)=>{
        // console.log(resp.data);
        this.isLoading =false;
        this.allJobs = resp.data;
        this.jobs = resp.data;
      },
      error: (error:any)=>{
        console.log(error);
      }
    })

  }
ngOnInit(): void {
  // this.isLoading = true;
  this.jobs = this.allJobs;
}
byActiveJobs(){
  return this.jobs = this.activeJobs;
}

}
