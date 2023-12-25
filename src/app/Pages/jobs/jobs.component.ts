import { Component } from '@angular/core';
import { Job } from 'src/app/interfaces/job';
import { JobsService } from 'src/app/services/jobs.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent {

  jobs!: Job[];

  constructor(private _jobService: JobsService ){
    this._jobService.Activejobs().subscribe({
      next: (resp: any)=>{
        console.log(resp);
        this.jobs = resp.data;
      },
      error: (error:any)=>{
        console.log(error);
      }
    })
  }


}
