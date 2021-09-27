import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    {id : 1, description: 'Learn the QURAN' },
    {id : 2, description: 'Learn  an expert at angular'},
    {id : 3, description: 'Visit France'}
  ];
  // todo = {
  //   id : 1,
  //   description : 'Learn the QURAN'
  // };
  constructor() { }

  ngOnInit() {
  }

}
