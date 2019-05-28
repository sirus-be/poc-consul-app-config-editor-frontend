import { Component, OnInit, ViewChild } from '@angular/core';
import { JsonEditorOptions, JsonEditorComponent } from 'ang-jsoneditor';

@Component({
  selector: 'app-configuration-mta',
  templateUrl: './configuration-mta.component.html',
  styleUrls: ['./configuration-mta.component.css']
})
export class ConfigurationMtaComponent implements OnInit {
  public editorOptions: JsonEditorOptions;
  public data: any;
  @ViewChild(JsonEditorComponent) editor: JsonEditorComponent;
  environment = 'dev';
  description = 'Move to accepatance.';

  keys = [{
    jsonPath: 'database.login',
    path: '/openshift/projects/1/applications/1/dev/database/login',
    value: 'mongodb_user',
    secret: false
  }, {
    jsonPath: 'database.password',
    path: '/openshift/projects/1/secrets/dev/database_password',
    value: '',
    secret: true
  }, {
    jsonPath: 'serviceUser.login',
    path: '/openshift/projects/1/applications/1/dev/serviceUser/login',
    value: 'User.O',
    secret: false
  }, {
    jsonPath: 'serviceUser.password',
    path: '/openshift/projects/1/secrets/dev/serviceUser_password',
    value: '',
    secret: true
  }];

  constructor() { }

  ngOnInit() {
    this.editorOptions = new JsonEditorOptions();
    this.editorOptions.mode = 'form';
    this.data = {
      database: {
        login: 'mongodb_user',
        password: '@project@mongodbpassword'
      },
      serviceUser: {
        login: 'User.O',
        password: '@project@serviceUser'
      }
    };
  }

}
