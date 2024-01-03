import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { JobSeeker } from '../interfaces/job-seeker';
@Injectable({
  providedIn: 'root'
})
export class JobSeekerService {
  
  constructor(private _http: HttpClient) { }

  // http://freeapi.miniprojectideas.com/api/JobPortal/AddNewJobSeeker

  registerAsJobSeeker(data:JobSeeker): Observable<any>{
      return this._http.post(`${environment._baseUrl}/AddNewJobSeeker`,data);
  }

  sendJobApplication(data:any): Observable<any>{
    return this._http.post(`${environment._baseUrl}/SendJobApplication`,data)
  }

}
