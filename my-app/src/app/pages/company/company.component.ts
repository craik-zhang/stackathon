import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';

@Component({
    selector: 'app-company',
    templateUrl: './company.component.html',
    styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

    constructor(private companyService: CompanyService) { }

  
    ngOnInit(): void {
    //   this.iposService.allIpos().subscribe(data => {
    //     console.log(JSON.stringify(data));
    //   })
    //   this.ipos = IPOS;
    }
  
  }