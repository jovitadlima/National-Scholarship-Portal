import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-scheme-list',
  templateUrl: './student-scheme-list.component.html',
  styleUrls: ['./student-scheme-list.component.css'],
})
export class StudentSchemeListComponent implements OnInit {
  // for demo purpose only, remove later
  public schemes = [
    {
      id: 1,
      Name: 'Maharashtra DTE Scholarship',
      applied: true,
      Description:
        'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
    },
    {
      id: 2,
      Name: 'West Bengal DTE Scholarship',
      applied: false,
      Description:
        'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
    },
    {
      id: 3,
      Name: 'Delhi DTE Scholarship',
      applied: false,
      Description:
        'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
    },
    {
      id: 4,
      Name: 'Maharashtra Scholarship for girls',
      applied: false,
      Description:
        'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
