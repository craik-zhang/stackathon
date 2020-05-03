import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
    providedIn: "root",
})

export class ProfileService {
    constructor(private http: HttpClient) { }

    updateProfile() {
        return this.http.put(`${environment.baseUrl}/profile`, httpOptions);
    }
}