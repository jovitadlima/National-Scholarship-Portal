import { Component, OnInit } from '@angular/core';
import { IScheme } from 'src/app/models/IScheme';
import { SchemeService } from 'src/app/services/scheme.service';

@Component({
  selector: 'app-student-scheme-list',
  templateUrl: './student-scheme-list.component.html',
  styleUrls: ['./student-scheme-list.component.css'],
})
export class StudentSchemeListComponent implements OnInit {
  // for demo purpose only, remove later
  public schemes: IScheme[] = [];

  constructor(private _schemeService: SchemeService) {}

  ngOnInit(): void {
    this._schemeService.getScheme().subscribe((response: IScheme[]) => {
      this.schemes = response;
      console.log('Schemes', response);
    });
  }
}
