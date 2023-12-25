import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
// import { FormBuilder,FormGroup , Validators } from '@angular/forms';
import { Company } from '../interfaces/company';
import { Observable} from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  _baseURL: string = environment._baseUrl;

  constructor( private _http: HttpClient) { 
  
  }
  addNewCompany(data: Company):Observable<any>{
      // url http://freeapi.miniprojectideas.com/api/JobPortal/AddNewEmployer
      console.warn(data);
      return this._http.post(`${this._baseURL}/AddNewEmployer`,data);
  }
}
