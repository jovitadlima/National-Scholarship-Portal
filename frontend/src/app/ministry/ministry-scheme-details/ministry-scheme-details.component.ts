import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IScheme } from 'src/app/models/IScheme';
import { SchemeService } from 'src/app/services/scheme.service';

@Component({
  selector: 'app-ministry-scheme-details',
  templateUrl: './ministry-scheme-details.component.html',
  styleUrls: ['./ministry-scheme-details.component.css'],
})
export class MinistrySchemeDetailsComponent implements OnInit {
  constructor(
    private _schemeService: SchemeService,
    private _route: ActivatedRoute
  ) {}

  scheme!: IScheme;

  ngOnInit(): void {
    let id = Number(this._route.snapshot.paramMap.get('id'));
    this._schemeService.getSchemeById(id).subscribe((response) => {
      this.scheme = response;
      console.log(response);
    });
  }
}
