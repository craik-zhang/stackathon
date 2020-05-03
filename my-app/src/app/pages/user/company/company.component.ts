import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/user/company.service';

@Component({
    selector: 'app-company',
    templateUrl: './company.component.html',
    styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

    constructor(private companyService: CompanyService) { }

  
    ngOnInit(): void {
    }
  
  }