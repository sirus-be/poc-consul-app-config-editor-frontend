import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectComponent } from './project/project.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProjectCreateComponent } from './project-create/project-create.component';
import { ApplicationListComponent } from './application-list/application-list.component';
import { SecretListComponent } from './secret-list/secret-list.component';
import { EnvironmentListComponent } from './environment-list/environment-list.component';
import { VersionListComponent } from './version-list/version-list.component';
import { GlobalSecretListComponent } from './global-secret-list/global-secret-list.component';
import { ApplicationCreateComponent } from './application-create/application-create.component';
import { ApplicationComponent } from './application/application.component';
import { SecretCreateComponent } from './secret-create/secret-create.component';
import { SecretComponent } from './secret/secret.component';

const appRoutes: Routes = [
  { path: 'projects/new', component: ProjectCreateComponent },
  { path: 'projects', component: ProjectListComponent },
  { path: 'global-secrets', component: GlobalSecretListComponent },
  {
    path: 'projects/:projectId', component: ProjectComponent, children: [
      {
        path: 'applications',
        component: ApplicationListComponent
      },
      {
        path: 'applications/new',
        component: ApplicationCreateComponent
      },
      {
        path: 'applications/:applicationId',
        component: ApplicationComponent
      },
      {
        path: 'environments',
        component: EnvironmentListComponent
      }, {
        path: 'secrets/new',
        component: SecretCreateComponent
      }, {
        path: 'secrets/:secretId',
        component: SecretComponent
      }, {
        path: 'secrets',
        component: SecretListComponent
      },
      {
        path: 'versions',
        component: VersionListComponent
      },
      {
        path: '',
        redirectTo: 'applications',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/projects',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    ProjectComponent,
    ProjectCreateComponent,
    ApplicationListComponent,
    SecretListComponent,
    EnvironmentListComponent,
    VersionListComponent,
    GlobalSecretListComponent,
    ApplicationCreateComponent,
    ApplicationComponent,
    SecretCreateComponent,
    SecretComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ClarityModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
