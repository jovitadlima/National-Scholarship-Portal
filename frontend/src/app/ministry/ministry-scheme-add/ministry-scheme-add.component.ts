import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IScheme } from 'src/app/models/IScheme';
import { SchemeModel } from 'src/app/models/SchemeModel';
import { SchemeService } from 'src/app/services/scheme.service';

@Component({
  selector: 'app-ministry-scheme-add',
  templateUrl: './ministry-scheme-add.component.html',
  styleUrls: ['./ministry-scheme-add.component.css'],
})
export class MinistrySchemeAddComponent implements OnInit {
  constructor(private _schemeService: SchemeService, private _router: Router) {}

  schemeModel: SchemeModel = new SchemeModel();

  ngOnInit(): void {}

  onSubmit() {
    this._schemeService.addScheme(this.schemeModel).subscribe((response) => {
      console.log(response);
      this._router.navigate(['/ministrySchemeList']);
    });
  }
}
