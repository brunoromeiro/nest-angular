import { Injectable } from '@angular/core';
import {Task} from "./task";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  url: string = `${environment.api}/tasks`;
  constructor(
      private http: HttpClient
  ) { }

  getAll() {
    return this.http.get<Task[]>(this.url);

  }

  getAllById(id: string) {

  }
  save(task: Task) {

  }

  update(id: string, task: Task) {
    return this.http

  }

  delete(id: string) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
