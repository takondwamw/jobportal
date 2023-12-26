import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Job } from 'src/app/interfaces/job';
import { JobsService } from 'src/app/services/jobs.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit{
  job!:Job;
  id!:number;
  constructor(private jobService: JobsService, private route: ActivatedRoute){}

  ngOnInit(): void {
     this.route.paramMap.subscribe({
      next: (param) =>{
         this.id = Number(param.get('id'));

         this.jobService.getJobById(this.id).subscribe({
          next: (resp:any) => {
            if(resp.result){
                this.job = resp.data;
                console.log(resp.data)
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
  }
}
