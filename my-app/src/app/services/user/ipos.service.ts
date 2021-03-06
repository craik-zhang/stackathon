import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
    providedIn: "root",
})

export class IposService {
    constructor(private http: HttpClient) { }

    allIpos() {
        return this.http.get(`${environment.baseUrl}/ipos`, httpOptions);
    }
}