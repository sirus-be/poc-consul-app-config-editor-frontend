import { Component, OnInit } from '@angular/core';
import { SecretService } from '../secret.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-secret-create',
  templateUrl: './secret-create.component.html',
  styleUrls: ['./secret-create.component.css']
})
export class SecretCreateComponent implements OnInit {
  key: string;

  constructor(private dataService: SecretService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }

  save() {
    const projectId = this.activatedRoute.parent.snapshot.paramMap.get('projectId');
    this.dataService.create(projectId, {
      key: this.key,
      id: null
    }).subscribe(() => {
      this.router.navigate(['../'], { relativeTo: this.activatedRoute });
    });
  }
}
