import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { Secret } from '../secret.model';
import { SecretService } from '../secret.service';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-secret-list',
  templateUrl: './secret-list.component.html',
  styleUrls: ['./secret-list.component.css']
})
export class SecretListComponent implements OnInit {
  project: Project;
  records: Secret[];

  constructor(private dataService: SecretService,
    private activatedRoute: ActivatedRoute,
    private projectService: ProjectService) { }

  ngOnInit() {
    const projectId = this.activatedRoute.parent.snapshot.paramMap.get('projectId');
    this.projectService.getById(projectId)
      .subscribe(p => this.project = p);
    this.dataService.search(projectId)
      .subscribe(recs => this.records = recs);
  }
}
