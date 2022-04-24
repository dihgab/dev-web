import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../tasks/shared/task';
import { TaskService } from '../tasks/shared/task.service';

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.css']
})
export class TaskListItemComponent implements OnInit {
  @Input()
  task!: Task;
  constructor(private taskService: TaskService) { }

  ngOnInit(){
  }

  remove(task: Task){
    this.taskService.delete(task.id);
  }
}
