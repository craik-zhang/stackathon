import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/user/company.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-company',
    templateUrl: './company.component.html',
    styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

    constructor(private companyService: CompanyService, private fb: FormBuilder) { }
    ngOnInit(): void {
    }

    profileForm = this.fb.group({
        companyOrSectorOption: ['', Validators.required],
        exchange: [''],
        companyName: [''],
        period: this.fb.group({
          fromPeriod: [''],
          toPeriod: [''],
        }),
      });

      onSubmit() {
        // TODO: Use EventEmitter with form value
        console.warn(this.profileForm.value);
      }
  
  }