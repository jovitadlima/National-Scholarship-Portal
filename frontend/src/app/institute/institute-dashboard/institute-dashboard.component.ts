import { Component, OnInit } from '@angular/core';
import { IInstitute } from 'src/app/models/IInstitute';
import { InstituteService } from 'src/app/services/institute.service';

@Component({
  selector: 'app-institute-dashboard',
  templateUrl: './institute-dashboard.component.html',
  styleUrls: ['./institute-dashboard.component.css'],
})
export class InstituteDashboardComponent implements OnInit {
  constructor(private _instituteService: InstituteService) {}

  institute!: IInstitute;

  ngOnInit(): void {
    this._instituteService.getInstituteDetail().subscribe((response) => {
      this.institute = response;
      console.log(response);
    });
  }
}
