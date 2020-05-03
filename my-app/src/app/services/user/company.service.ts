import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
    providedIn: "root",
})

export class CompanyService {
    getValue(): any {
        return "real value";
    }
    getObservableValue() {
      throw new Error("Method not implemented.");
    }
    getPromiseValue() {
      throw new Error("Method not implemented.");
    }
    constructor() { }

    getCompanyByName() {
        // return this.http.get(`${environment.baseUrl}/company/companyName`, httpOptions);
        return "Google";
    }
}