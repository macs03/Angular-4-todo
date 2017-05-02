import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class TodosService {

  constructor(private http: Http) {
    console.log('Post Service Initialized...')
  }

  getTodos() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos')
      .map(res => res.json());
  }

}
