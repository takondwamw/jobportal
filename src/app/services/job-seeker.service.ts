import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
// import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class JobSeekerService {
  
  constructor(private _http: HttpClient) { }

  // http://freeapi.miniprojectideas.com/api/JobPortal/AddNewJobSeeker

  registerAsJobSeeker(data:object){
      this._http.post(`${environment._baseUrl}/AddNewJobSeeker`,data);
  }
}
