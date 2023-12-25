import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';
import { HomeComponent } from './Pages/home/home.component';
import { JobDetailsComponent } from './Pages/job-details/job-details.component';
import { JobListingComponent } from './Pages/job-listing/job-listing.component';
import { JobsComponent } from './Pages/jobs/jobs.component';
import { MyJobsComponent } from './Pages/my-jobs/my-jobs.component';
import { JobsCreateComponent } from './Pages/jobs-create/jobs-create.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    JobDetailsComponent,
    JobListingComponent,
    JobsComponent,
    MyJobsComponent,
    JobsCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [JobsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
