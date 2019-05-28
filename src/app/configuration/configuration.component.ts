import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { JsonEditorOptions, JsonEditorComponent } from 'ang-jsoneditor';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {
  public editorOptions: JsonEditorOptions;
  public data: any;
  @ViewChild(JsonEditorComponent) editor: JsonEditorComponent;
  historyRecords = [
    {
      date: new Date(2019, 5, 2),
      user: 'John Doe (ex01234)',
      note: 'Toevoegen van API url',
      deployed: true
    },
    {
      date: new Date(2018, 1, 10),
      user: 'Jane Doe (ex4658)',
      note: 'Aanpassen van db url',
      deployed: false
    },
    {
      date: new Date(2018, 1, 2),
      user: 'Jane Doe (ex4658)',
      note: 'Setup van configuratie',
      deployed: false
    }
  ];
  environment = 'dev';
  isDeployed = false;

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
    this.editorOptions.mode = 'code';
    this.editorOptions.onEditable = () => false;
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
