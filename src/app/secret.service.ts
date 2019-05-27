import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Secret } from './secret.model';

@Injectable({
  providedIn: 'root'
})
export class SecretService {

  private secrets = {
    1: [{
      id: '1',
      key: 'mongodb_password_1'
    }, {
      id: '2',
      key: 'maps_api_client_secret'
    }]
  };

  constructor() { }

  search(projectId: string): Observable<Secret[]> {
    const results = this.secrets[projectId];
    return of(results ? results : []);
  }

  create(projectId: string, secret: Secret): Observable<boolean> {
    const results = this.secrets[projectId];
    if (!results) {
      secret.id = '1';
      this.secrets[projectId] = [ secret ];
    } else {
      secret.id = (results.length + 1).toString();
      results.push(secret);
    }
    return of(true);
  }

  delete(projectId: string, secretId: string): Observable<boolean> {
    const results = this.secrets[projectId];
    const secret = results.find(a => a.id === secretId);
    results.splice(results.indexOf(secret), 1);
    return of(true);
  }

  getById(projectId: string, secretId: string): Observable<Secret> {
    const results = this.secrets[projectId];
    const secret = results.find(a => a.id === secretId);
    return of(secret);
  }
}
