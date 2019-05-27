import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../application.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Application } from '../application.model';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {
  application: Application;

  constructor(private applicationService: ApplicationService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    const projectId = this.activatedRoute.parent.snapshot.paramMap.get('projectId');
    const applicationId = this.activatedRoute.snapshot.paramMap.get('applicationId');
    this.applicationService.getById(projectId, applicationId)
      .subscribe(app => {
        this.application = app;
      });
  }

}
