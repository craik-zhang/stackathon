import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/user/company.service';
interface CompanyItem {
  id: string;
  companyName: string
  stockExchange: string;
  brief: string;
}
const COMPANIES: CompanyItem[] = [{
  id: '1',
  stockExchange: "BSE",
  companyName: 'Google',
  brief: 'iPhone SE packs A13 Bionic, Portrait mode, 4K video, Touch ID, a Retina HD display, and great battery life into a 4.7” design',
}, 
{
  id: '2',
  stockExchange: "NSE",
  companyName: 'Oracle',
  brief: 'iPhone SE packs A13 Bionic, Portrait mode, 4K video, Touch ID, a Retina HD display, and great battery life into a 4.7” design',
},
{
  id: '3',
  stockExchange: "NSE",
  companyName: 'Alibaba',
  brief: 'iPhone SE packs A13 Bionic, Portrait mode, 4K video, Touch ID, a Retina HD display, and great battery life into a 4.7” design',
}
];
@Component({
  selector: 'app-manage-company',
  templateUrl: './manage-company.component.html',
  styleUrls: ['./manage-company.component.css']
})
export class ManageCompanyComponent implements OnInit {

  constructor(private companyService: CompanyService) { }

  companies: CompanyItem[];
  
    ngOnInit(): void {
      // this.companyService.getCompanyByName().subscribe(data => {
      //   console.log(JSON.stringify(data));
      // })
      this.companies = COMPANIES;
    }
    
    edit() {
      
    }
}
