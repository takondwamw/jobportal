import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor( private _http: HttpClient) { }

  // getAll jobs  http://freeapi.miniprojectideas.com/api/JobPortal/GetActiveJobListing
  Activejobs(): Observable<any>{
    return this._http.get(`${environment._baseUrl}/GetActiveJobListing`);
  }
}
