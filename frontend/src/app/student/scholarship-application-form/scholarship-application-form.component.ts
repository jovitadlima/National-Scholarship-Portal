import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-scholarship-application-form',
  templateUrl: './scholarship-application-form.component.html',
  styleUrls: ['./scholarship-application-form.component.css'],
})
export class ScholarshipApplicationFormComponent implements OnInit {
  model!: NgbDateStruct;
  constructor() {}

  ngOnInit(): void {}
}
