import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IScheme } from 'src/app/models/IScheme';
import { SchemeModel } from 'src/app/models/SchemeModel';
import { SchemeService } from 'src/app/services/scheme.service';

@Component({
  selector: 'app-ministry-scheme-add',
  templateUrl: './ministry-scheme-add.component.html',
  styleUrls: ['./ministry-scheme-add.component.css'],
})
export class MinistrySchemeAddComponent implements OnInit {
  constructor(
    private _schemeService: SchemeService,
    private _router: Router,
    private toastr: ToastrService
  ) {}

  schemeModel: SchemeModel = new SchemeModel();

  ngOnInit(): void {}

  onSubmit() {
    this._schemeService.addScheme(this.schemeModel).subscribe((response) => {
      console.log(response);
      this.toastr.success('Scheme added');
      this._router.navigate(['/ministrySchemeList']);
    });
  }
}
