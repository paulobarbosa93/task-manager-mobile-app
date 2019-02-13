import { Component } from '@angular/core';

@Component({
  selector: 'tasks',
  moduleId: module.id,
  templateUrl: './tasks.component.html'
})

export class TasksComponent {
  public tasks: any[];

  public constructor(){
    this.tasks = [
      {id: 1, title: 'Comprar notebook novo', done: false},
      {id: 2, title: 'Ir a academia', done: false},
      {id: 3, title: 'Seguir a dieta', done: false},
      {id: 4, title: 'Estudar todos os dias', done: false},
      {id: 5, title: 'Tomar água', done: false}
    ];
  }
}
