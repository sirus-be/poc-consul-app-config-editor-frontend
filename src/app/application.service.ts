import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Application } from './application.model';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  private applications = {
    1: [{
      id: '1',
      name: 'frontend'
    }, {
      id: '2',
      name: 'mongodb'
    }]
  };

  constructor() { }

  search(projectId: string): Observable<Application[]> {
    const results = this.applications[projectId];
    return of(results ? results : []);
  }

  create(projectId: string, application: Application): Observable<boolean> {
    const results = this.applications[projectId];
    if (!results) {
      application.id = '1';
      this.applications[projectId] = [ application ];
    } else {
      application.id = (results.length + 1).toString();
      results.push(application);
    }
    return of(true);
  }

  delete(projectId: string, applicationId: string): Observable<boolean> {
    const results = this.applications[projectId];
    const application = results.find(a => a.id === applicationId);
    results.splice(results.indexOf(application), 1);
    return of(true);
  }

  getById(projectId: string, applicationId: string): Observable<Application> {
    const results = this.applications[projectId];
    const application = results.find(a => a.id === applicationId);
    return of(application);
  }
}
