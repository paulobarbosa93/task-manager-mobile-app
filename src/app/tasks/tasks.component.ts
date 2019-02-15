import { Component } from '@angular/core';

@Component({
  selector: 'tasks',
  moduleId: module.id,
  templateUrl: './tasks.component.html'
})

export class TasksComponent {
  public tasks: any[];
  public icons: Map<string, string> = new Map<string, string>();

  public constructor(){
    this.tasks = [
      {id: 1, title: 'Comprar notebook novo', done: false},
      {id: 2, title: 'Ir a academia', done: false},
      {id: 3, title: 'Seguir a dieta', done: false},
      {id: 4, title: 'Estudar todos os dias', done: false},
      {id: 5, title: 'Tomar água', done: false},
      {id: 5, title: 'Fazer AEJ', done: false},
      {id: 5, title: 'Assistir videoaulas', done: false},
      {id: 5, title: 'Assistir série', done: false},
      {id: 5, title: 'Tomar água', done: false}
    ];

    this.setIcons();
  }

  private setIcons(): void {
    this.icons.set('trash', String.fromCharCode(0xf014));
    this.icons.set('add', String.fromCharCode(0xf055));
    this.icons.set('checked', String.fromCharCode(0xf14a));
    this.icons.set('unchecked', String.fromCharCode(0xf096));
  }

  public checkBoxIcon(task: any){
    if(task.done) {
      return this.icons.get('checked');
    }else {
      return this.icons.get('unchecked');
    }
  }
}
