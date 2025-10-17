import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlSegment } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DrinkapiService {

  constructor (private http: HttpClient) { }

  getDrinks$() {
    const url = 'http://localhost:8000/api/drinks';
    return this.http.get(url)
  }
  createDrinks$(drink: any) {
    const url = 'http://localhost:8000/api/drinks';
    return this.http.post(url, drink)
  }
}
