import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor( private _http: HttpClient) { }

  // getAll Active jobs  http://freeapi.miniprojectideas.com/api/JobPortal/GetActiveJobListing
  Activejobs(): Observable<any>{
    return this._http.get(`${environment._baseUrl}/GetActiveJobListing`);
  }

  allJobs():Observable<any>{
    // get all jobs  http://freeapi.miniprojectideas.com/api/JobPortal/GetAllJobListing
    return  this._http.get(`${environment._baseUrl}/GetAllJobListing`);
  }
  getJobById(id: number): Observable<any>{
    // http://freeapi.miniprojectideas.com/api/JobPortal/GetJobListingById?jobId=82
    return this._http.get(`${environment._baseUrl}/GetJobListingById?jobId=${id}`);
  }
}
