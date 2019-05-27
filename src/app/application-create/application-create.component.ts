import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../application.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-application-create',
  templateUrl: './application-create.component.html',
  styleUrls: ['./application-create.component.css']
})
export class ApplicationCreateComponent implements OnInit {
  name: string;

  constructor(private applicationService: ApplicationService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }

  save() {
    const projectId = this.activatedRoute.parent.snapshot.paramMap.get('projectId');
    this.applicationService.create(projectId, {
      name: this.name,
      id: null
    }).subscribe(() => {
      this.router.navigate(['../../applications'], { relativeTo: this.activatedRoute });
    });
  }

}
