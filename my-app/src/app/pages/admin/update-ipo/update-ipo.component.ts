import { Component, OnInit } from '@angular/core';
import { IposService } from 'src/app/services/user/ipos.service';
import { FormBuilder, Validators } from '@angular/forms';
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
  companyName: 'Google',
  openDate: new Date(),
  remarks: 'iPhone SE packs A13 Bionic, Portrait mode, 4K video, Touch ID, a Retina HD display, and great battery life into a 4.7” design',
}, 
{
  id: '2',
  pricePerShare: "456",
  stockExchange: "NSE",
  shareNumber: 4299,
  companyName: 'Oracle',
  openDate: new Date(),
  remarks: 'iPhone SE packs A13 Bionic, Portrait mode, 4K video, Touch ID, a Retina HD display, and great battery life into a 4.7” design',
},
{
  id: '3',
  pricePerShare: "999",
  stockExchange: "NSE",
  shareNumber: 9999,
  companyName: 'Alibaba',
  openDate: new Date(),
  remarks: 'iPhone SE packs A13 Bionic, Portrait mode, 4K video, Touch ID, a Retina HD display, and great battery life into a 4.7” design',
}
];
@Component({
  selector: 'app-update-ipo',
  templateUrl: './update-ipo.component.html',
  styleUrls: ['./update-ipo.component.css']
})
export class UpdateIpoComponent implements OnInit {

  constructor(private iposService: IposService, private fb: FormBuilder) { }

  ipos: IposItem[];
  
    ngOnInit(): void {
      // this.companyService.getCompanyByName().subscribe(data => {
      //   console.log(JSON.stringify(data));
      // })
      this.ipos = IPOS;
    }
    ipoForm = this.fb.group({
      companyName: ['Alibaba', Validators.required],
      stockOfExchange: ['Jack'],
      pricePerShare: ['11111'],
      noOfShare: ['a,b,c,d'],
      brief: ['This is hello world!']
      
    });
    updateProfile() {
      this.ipoForm.patchValue({
        companyName: 'Oracle',
      });
    }
  
    onSubmit() {
      // TODO: Use EventEmitter with form value
      console.warn(this.ipoForm.value);
    }


}
