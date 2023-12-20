import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { RegisterComponent } from './Pages/register/register.component';
import { LoginComponent } from './Pages/login/login.component';
import { JobsComponent } from './Pages/jobs/jobs.component';
import { JobListingComponent } from './Pages/job-listing/job-listing.component';
import { MyJobsComponent } from './Pages/my-jobs/my-jobs.component';
import { JobDetailsComponent } from './Pages/job-details/job-details.component';
import { JobsCreateComponent } from './Pages/jobs-create/jobs-create.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,

  },
  {
    path: 'register',
    component:RegisterComponent,
  },
  // {
  //   path:'**',
  //   component: HomeComponent,
  // },

  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'jobs',
    component: JobsComponent,
  },
  {
    path: 'job-listing',
    component: JobListingComponent,
  },
  {
    path: 'my-jobs',
    component: MyJobsComponent,
  },
  {
    path: 'job-details/:id',
    component: JobDetailsComponent,
  },
  {
    path: 'jobs/create',
    component: JobsCreateComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
