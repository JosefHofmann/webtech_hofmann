import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, catchError } from 'rxjs';
import { map } from 'rxjs/operators';
import { Entry } from '../models/entries';

@Injectable({
  providedIn: 'root'
})

export class PopularEntriesService {

  baseUrl = "/server";

  constructor(private httpClient: HttpClient) { }

  // Aufruf "/api/core/discover/search" schlägt fehl
  getEntries(): Observable<any> {
    const reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'True' });
    return this.httpClient.get<Entry>(this.baseUrl + "/api/core/collections", { headers: reqHeader }).pipe(
      catchError(this.handleError)
    );
  }

  getEntry(id: string): Observable<any> {
    return this.httpClient.get<Entry>(this.baseUrl + id).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): any {
    console.error('There was an error!');
  }
}
