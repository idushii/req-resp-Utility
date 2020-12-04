import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MainService } from '../main.service';
import { ServerRequest } from '../serverRequest';

@Component({
  selector: 'app-request-data',
  templateUrl: './request-data.component.html',
  styleUrls: ['./request-data.component.scss']
})
export class RequestDataComponent implements OnInit {

  item: ServerRequest
  items: ServerRequest[] = []

  constructor( private Service: MainService ) { }

  ngOnInit() {
    this.Service.getAll()
    .subscribe((resp: ServerRequest[]) => {
        this.items = resp
    });
  }
  getItem(id: number): Observable<ServerRequest> {
    return of(this.items.find(item => item.id === id));
  }

}
