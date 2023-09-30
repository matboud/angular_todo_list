import { Component } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';
import { Task } from 'src/app/model/task';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  taskObj: Task = new Task();
  taskArr: Task[] = [];

  addTaskValue: string = '';

  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    this.taskObj = new Task();
    this.taskArr = [];
    this.getAllTasks();
  }

  getAllTasks() {
    this.crudService.getAllTask().subscribe(
      (res) => {
        this.taskArr = res;
      },
      (err) => {
        alert('enable to get the tasks');
      }
    );
  }

  addTask() {
    this.taskObj.task_name = this.addTaskValue;
    this.crudService.addTask(this.taskObj).subscribe(
      (res) => {
        this.ngOnInit();
        this.addTaskValue = ""
      },
      (err) => {
        alert(err);
      }
    );
  }

  editTask() {
    this.crudService.editTask(this.taskObj).subscribe(
      (res) => {
        this.ngOnInit();
      },
      (err) => {
        alert('failed to update task');
      }
    );
  }

  deleteTask(etask: Task) {
    this.crudService.deleteTask(etask).subscribe(
      (res) => {
        this.ngOnInit();
      },
      (err) => {
        alert('failed to delete task');
      }
    );
  }
}
