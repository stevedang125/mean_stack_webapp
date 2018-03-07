import { Component, OnInit } from '@angular/core';
import { TaskService } from '../shared/task.service';
import { Task } from '../task';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  // init the tasks val as an array of objects
  // this can be load by *ngFor to keep the list of tasks
  // update instantly after added, updated or deleted
  tasks:Task[];

  constructor(private _taskService: TaskService, private router: Router) { }

  ngOnInit() {
    // Fetch the data from DB
    this.getTasks();
  }

  // this will fetch the data from the database 
  // we will run this as soon as the user visit the website
  // this function will be call in ngOnInit()
  getTasks(){
    this._taskService.readTasks().subscribe(
      data => {
        console.log(data);
        this.tasks = data['msg'];
      },
      error => {
        console.log(error);
      }
    )
  }

  // send this task to the task object in the update component
  edit(task){
    this._taskService.setter(task);
    this.router.navigate(['/createUpdate']);
  }


  deleteTask(task){
    this._taskService.deleteTask(task._id).subscribe(
      data=>{
        this.tasks.splice(this.tasks.indexOf(task),1);
      },
      error =>{
        console.log(error);
      }
    )
  }

}



// *Note: The sever, mongodb, and the ng serve have to be on at the same time
// if the browser prevented the connection, get "cors" independency 
// Use post man to add tasks into database to test localhost:8080/create : POST
// body/urlencoded/put in the object name and time