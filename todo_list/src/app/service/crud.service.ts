import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  serviceURL: string;

  constructor(private http: HttpClient) {
    this.serviceURL = 'http://localhost:3000/tasks';
  }
}
