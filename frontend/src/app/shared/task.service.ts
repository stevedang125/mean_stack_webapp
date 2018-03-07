import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../task';

@Injectable()
export class TaskService {

  private task:Task;

  // back end server on port 8080
  // HttpHeaders(this is what similar to the Headers in PostMan to send data to server)
  private baseUri:string="http://localhost:8080";
  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  // These method will talk/send_data to the back end:(server) 

  // Create a new task, the passed in task will be the Object type
  // then get send over the server to add
  createTask(task: Task){
    return this.http.post(this.baseUri+'/create', task, {headers:this.headers});
  }

  // No params needed.
  readTasks(){
    return this.http.get(this.baseUri+'/read',{headers:this.headers});
  }

  updateTask(task: Task){
    return this.http.put(this.baseUri+'/update', task, {headers:this.headers});
  }

  // Param is an id with string type from the view/template
  deleteTask(id: string){
    return this.http.delete(this.baseUri+'/delete/'+id, {headers:this.headers});
  }

  setter(task:Task){
    this.task=task;
  }
  getter(){
    return this.task;
  }


}
