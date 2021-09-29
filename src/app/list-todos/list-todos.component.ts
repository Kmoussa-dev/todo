import { Component, OnInit } from '@angular/core';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {

  }
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    new Todo(1, 'Learn to Dance', false, new Date()),
    new Todo(2, 'Become an expert at angular', false, new Date()),
    new Todo(3, 'Visit France', false, new Date())
  ];


  // todos = [
  //   {id : 1, description: 'Learn the QURAN' },
  //   {id : 2, description: 'Learn  an expert at angular'},
  //   {id : 3, description: 'Visit France'}
  // ];
  // todo = {
  //   id : 1,
  //   description : 'Learn the QURAN'
  // };
  constructor() { }

  ngOnInit() {
  }

}
