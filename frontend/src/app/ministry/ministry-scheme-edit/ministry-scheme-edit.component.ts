import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SchemeModel } from 'src/app/models/SchemeModel';
import { SchemeService } from 'src/app/services/scheme.service';

@Component({
  selector: 'app-ministry-scheme-edit',
  templateUrl: './ministry-scheme-edit.component.html',
  styleUrls: ['./ministry-scheme-edit.component.css'],
})
export class MinistrySchemeEditComponent implements OnInit {
  constructor(
    private _schemeService: SchemeService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {}

  schemeModel: SchemeModel = new SchemeModel();

  ngOnInit(): void {}

  onSubmit() {
    let id = Number(this._route.snapshot.paramMap.get('id'));
    this._schemeService
      .editScheme(id, this.schemeModel)
      .subscribe((response) => {
        console.log(response);
        this._router.navigate(['/ministrySchemeList']);
      });
  }
}
