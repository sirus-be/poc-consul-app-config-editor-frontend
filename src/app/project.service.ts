import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from './project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projects: Project[] = [];

  constructor() { }

  search(): Observable<Project[]> {
    return of(this.projects);
  }

  create(project: Project): Observable<boolean> {
    project.id = (this.projects.length + 1).toString();
    this.projects.push(project);
    return of(true);
  }
}
