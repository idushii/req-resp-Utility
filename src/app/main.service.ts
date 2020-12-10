import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { RequestData } from './request-data';
import { ServerRequest } from './serverRequest';
import {AngularFireDatabase, AngularFireList} from "@angular/fire/database";


@Injectable({
  providedIn: 'root'
})
export class MainService {

  private dbPath = '/lists1';
  tutorialsRef: AngularFireList<RequestData> = null;

  requestsURL = 'http://localhost:1111/logs/'

  private items: RequestData[]
  private newItems: RequestData[]
  private item: RequestData

constructor( private http: HttpClient, private db: AngularFireDatabase ) {
  this.tutorialsRef = db.list(this.dbPath);
}

  getAll1(): AngularFireList<ServerRequest> {
    return this.tutorialsRef;
  }

  clearAll() {
    this.tutorialsRef.remove();
  }



  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      window.alert(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }

  public getAll(): Observable<RequestData[]> {
    return this.http.get<ServerRequest[]>(this.requestsURL)
    .pipe(map(all => all.map((data: ServerRequest) => new RequestData(data))))
    .pipe(catchError(this.handleError('getAll', [])));
  }

  getData() {
    this.getAll().subscribe(items => {
      this.newItems = items
      console.log(this.newItems)
    })
    this.newItems.forEach(newItem => {
      console.log(newItem)
      this.items.forEach(item => {
        if(newItem.id == item.id) {
          this.item = this.getByID(item.id)
          this.updateData(this.item, newItem)
        } else {
          this.items.push(new RequestData(newItem))
        }
      })
      console.log(this.items)
    });
    return this.items
  }

  getByID(id: number) {
    this.item = this.items.find(item => item.id === id);
    return this.item;
  }

  updateData(editItem: RequestData, _data: any) {
    editItem = {
      id: editItem.id,
      RequestURL: editItem.RequestURL,
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
    //return editItem;
  }
}
