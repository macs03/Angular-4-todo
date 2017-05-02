import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [TodosService]
})
export class UserComponent implements OnInit {

  title: string;
  name: string;
  email: string;
  address: address;
  hobbies: string[];
  showHobbies: boolean;
  todos: Todo[];

  constructor(private todosService: TodosService) {
    this.title = 'Hello!';
    this.name = 'Miguel Cardenas';
    this.email = 'miguelcarde.3@gmail.com'
    this.address = {
      street: 'calle 140 carrera 7b',
      city: 'Bogotá',
      country: 'Colombia'
    }
    this.hobbies = ['Music', 'Sports', 'Gym']
    this.showHobbies = false;
    this.todosService = todosService;
  }

  ngOnInit() {
    this.todosService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  toogleHobbies() {
    this.showHobbies = !this.showHobbies;
  }

  addHobby(hobby) {
    this.hobbies.push(hobby);
  }

  deleteHobby(i) {
    this.hobbies.splice(i, 1);
  }

}

interface address {
  street: string;
  city: string;
  country: string;
}

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
