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
  //public defaultHeaders = new HttpHeaders();

  items = <ServerRequest[]>[]
  newItem: ServerRequest
  editItem: ServerRequest

constructor( private http: HttpClient ) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      window.alert(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }

  public getAll(): Observable<any> {
    return this.http.get(this.requestsURL).pipe(catchError(this.handleError('getAll', [])));
  }

  public createData(_data: any) {
    this.newItem = {
      id: undefined,
      URL: _data.url,
      Code_pending: _data.code,
      Status_pending: _data.status,
      Method_pending: _data.method,
      Headers_pending: _data.headers,
      Headers_response_pending: _data.headers_response,
      Payload_pending: _data.payload,
      Response_pending: _data.response,
      Duration_pending: _data.duration,
      Action_pending: _data.action,
      Code_done: 0,
      Status_done: '',
      Headers_done: {'': ''},
      Headers_response_done: {'': ''},
      Payload_done: [],
      Response_done: [],
      Duration_done: 0,
      Action_done: ''
    }
    console.log(this.newItem)
    this.items.push(this.newItem)
    return this.items;
  }

  public updateData(editItem: ServerRequest, _data: any) {
    editItem = {
      id: editItem.id,
      URL: editItem.URL,
      Code_pending: editItem.Code_pending,
      Status_pending: editItem.Status_pending,
      Method_pending: editItem.Method_pending,
      Headers_pending: editItem.Headers_pending,
      Headers_response_pending: editItem.Headers_response_pending,
      Payload_pending: editItem.Payload_pending,
      Response_pending: editItem.Response_pending,
      Duration_pending: editItem.Duration_pending,
      Action_pending: editItem.Action_pending,
      Code_done: _data.code,
      Status_done: _data.status,
      Headers_done: _data.headers,
      Headers_response_done: _data.headers_response,
      Payload_done: _data.payload,
      Response_done: _data.response,
      Duration_done: _data.duration,
      Action_done: _data.action
    }
    console.log(editItem)
    return editItem;
  }

  public setData() {
    this.getAll().subscribe(resp => {
      resp.forEach(respItem => {
        console.log(respItem)
        this.items.forEach(i => {
          if(i.id != respItem.id) {
            this.createData(respItem)
          }
          if(i.id == respItem.id) {
            this.updateData(i, respItem)
          }
        })
      })
    });
    console.log(this.items)
    return this.items
  }
}
