import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SwService {

  constructor(private http: HttpClient) {}

  getGeralInfo(type: string): Observable<any | HttpErrorResponse> {
    return this.http.get<any>(`https://swapi.dev/api/${type}`);
  }
  
  getNextInfo(url: string): Observable<any | HttpErrorResponse> {
    return this.http.get<any>(url);
  }

}
