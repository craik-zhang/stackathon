import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/user/company.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-company',
    templateUrl: './sector.component.html',
    styleUrls: ['./sector.component.css']
})
export class SectorComponent implements OnInit {

    constructor(private fb: FormBuilder) { }
    ngOnInit(): void {
    }

    profileForm = this.fb.group({
        companyOrSectorOption: ['', Validators.required],
        exchange: [''],
        sectorName: [''],
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