import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
    providedIn: "root",
})

export class SectorService {
    constructor(private http: HttpClient) { }

    getSectorByName() {
        return this.http.get(`${environment.baseUrl}/sector/sectorName`, httpOptions);
    }
}