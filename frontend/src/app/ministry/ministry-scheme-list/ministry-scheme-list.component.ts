import { Component, OnInit } from '@angular/core';
import { IScheme } from 'src/app/models/IScheme';
import { SchemeService } from 'src/app/services/scheme.service';

@Component({
  selector: 'app-ministry-scheme-list',
  templateUrl: './ministry-scheme-list.component.html',
  styleUrls: ['./ministry-scheme-list.component.css'],
})
export class MinistrySchemeListComponent implements OnInit {
  constructor(private _schemeService: SchemeService) {}

  schemes: IScheme[] = [];

  ngOnInit(): void {
    this._schemeService.getSchemes().subscribe((response) => {
      this.schemes = response;
      console.log(response);
    });
  }

  deleteScheme(id: number) {
    this._schemeService.deleteScheme(id).subscribe((response) => {
      this.schemes = response;
      console.log(response);
    });
  }
}
