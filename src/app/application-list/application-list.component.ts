import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../application.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Application } from '../application.model';
import { ProjectService } from '../project.service';
import { Project } from '../project.model';

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.css']
})
export class ApplicationListComponent implements OnInit {
  project: Project;
  apps: Application[];

  constructor(private applicationService: ApplicationService,
    private activatedRoute: ActivatedRoute,
    private projectService: ProjectService) { }

  ngOnInit() {
    const projectId = this.activatedRoute.parent.snapshot.paramMap.get('projectId');
    this.projectService.getById(projectId)
      .subscribe(p => this.project = p);
    this.applicationService.search(projectId)
      .subscribe(apps => this.apps = apps);
  }
}
