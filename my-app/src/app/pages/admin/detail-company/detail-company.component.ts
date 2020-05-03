import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-detail-company',
  templateUrl: './detail-company.component.html',
  styleUrls: ['./detail-company.component.css']
})
export class DetailCompanyComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  companyForm = this.fb.group({
    name: ['Alibaba', Validators.required],
    ceo: ['Jack'],
    turnOver: ['11111'],
    boardOfDirectors: ['a,b,c,d'],
    brief: ['This is hello world!']
    
  });

  get aliases() {
    return this.companyForm.get('aliases') as FormArray;
  }

  updateProfile() {
    this.companyForm.patchValue({
      name: 'Oracle',
    });
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.companyForm.value);
  }

}
