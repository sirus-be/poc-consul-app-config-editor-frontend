import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  name = '';
  projectId: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.projectId = this.activatedRoute.snapshot.paramMap.get('projectId');
  }

}
