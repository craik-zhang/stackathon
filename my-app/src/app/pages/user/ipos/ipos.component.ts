import { Component, OnInit, ContentChildren, QueryList, Input } from "@angular/core";
import { IposService } from 'src/app/services/user/ipos.service';

interface IposItem {
    id: string;
    companyName: string
    stockExchange: string;
    pricePerShare: string;
    shareNumber: number;
    remarks: string;
    openDate: Date;
}

const IPOS: IposItem[] = [{
    id: '1',
    pricePerShare: "123",
    stockExchange: "BSE",
    shareNumber: 3299,
    companyName: 'iphone se',
    openDate: new Date(),
    remarks: 'iPhone SE packs A13 Bionic, Portrait mode, 4K video, Touch ID, a Retina HD display, and great battery life into a 4.7” design',
  }, {
    id: '2',
    pricePerShare: "456",
    stockExchange: "NSE",
    shareNumber: 4299,
    companyName: 'iphone se',
    openDate: new Date(),
    remarks: 'iPhone SE packs A13 Bionic, Portrait mode, 4K video, Touch ID, a Retina HD display, and great battery life into a 4.7” design',
  }
];

@Component({
    selector: 'app-ipos',
    templateUrl: './ipos.component.html',
    styleUrls: ['./ipos.component.css']
})
export class IposComponent implements OnInit {

    constructor(private iposService: IposService) { }
  
    ipos: IposItem[];
  
    ngOnInit(): void {
      this.iposService.allIpos().subscribe(data => {
        console.log(JSON.stringify(data));
      })
      this.ipos = IPOS;
    }
    
    details() {
      
    }
  
  }