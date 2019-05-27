import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Observable } from 'rxjs';
import { Project } from '../project.model';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  projects: Observable<Project[]>;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projects = this.projectService.search();
  }
}
