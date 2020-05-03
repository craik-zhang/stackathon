import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCompanyComponent } from './manage-company.component';
import { CompanyService } from 'src/app/services/user/company.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('ManageCompanyComponent', () => {
  let component: ManageCompanyComponent;
  let fixture: ComponentFixture<ManageCompanyComponent>;

  let companyService: CompanyService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#getValue should return real value from the real service', () => {
    companyService = new CompanyService();
    expect(companyService.getValue()).toBe('real value');
  });
  it('#getValue should return real value', () => {
    expect(companyService.getCompanyByName).toBe('Google');
  });

  // it('#getObservableValue should return value from observable',
  //   (done: DoneFn) => {
  //     companyService.getObservableValue().subscribe(value => {
  //     expect(value).toBe('observable value');
  //     done();
  //   });
  // });

  // it('#getPromiseValue should return value from a promise',
  //   (done: DoneFn) => {
  //     companyService.getPromiseValue().then(value => {
  //     expect(value).toBe('promise value');
  //     done();
  //   });
  // });
});
