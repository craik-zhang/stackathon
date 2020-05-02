import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
    providedIn: "root",
})

export class CompanyService {
    constructor(private http: HttpClient) { }

    getCompanyByName() {
        return this.http.get(`${environment.baseUrl}/company/companyName`, httpOptions);
    }
}