import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.css']
})
export class ProjectCreateComponent implements OnInit {
  name: string;

  constructor(private projectService: ProjectService, private router: Router) { }

  ngOnInit() {
  }

  save() {
    this.projectService.create({
      name: this.name,
      id: null,
      applications: 0
    }).subscribe(() => {
      this.router.navigate(['../projects']);
    });
  }
}
