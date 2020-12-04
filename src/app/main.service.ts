import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ServerRequest } from './serverRequest';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  requestsURL = 'http://localhost:1111/logs/'

constructor(
  private http: HttpClient
) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      window.alert(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }

  public getAll(): Observable<ServerRequest[]> {
    return this.http.get<ServerRequest[]>(this.requestsURL).pipe(catchError(this.handleError('getAll', [])));
  }
}
