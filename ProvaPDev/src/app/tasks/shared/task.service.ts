import { Task } from './task';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: Task[] = [
    { id: 1, description: 'Projeto 1', completed: false },
    { id: 2, description: 'Projeto 2', completed: false },
    { id: 3, description: 'Projeto 3', completed: false },

  ];

  constructor() { }

  getAll(){
    const list = window.localStorage.getItem('lista-tarefa');
    if(list){
      this.tasks = JSON.parse(list);
    }
    return this.tasks;
  }

  getById(id: number){
    const task = this.tasks.find((value) => value.id == id);
    return task;
  }

  save(task: Task){
    if(task.id){
      const taskArr = this.getById(task.id);
      taskArr!.description = task.description;
      taskArr!.completed = task.completed;
    }else{

      let lastId = 1;
      if(this.tasks.length > 0){
        lastId = this.tasks[this.tasks.length-1].id;
      }
      task.id = lastId + 1;
      task.completed = false;
      this.tasks.push(task);
    }

    window.localStorage.setItem('lista-tarefas', JSON.stringify(this.tasks));
  }

  delete(id: number){
    const taskIndex = this.tasks.findIndex((value) => value.id == id);
    this.tasks.splice(taskIndex, 1);
  }
}
