import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MainService } from '../main.service';
import { ServerRequest } from '../serverRequest';

@Component({
  selector: 'app-request-data',
  templateUrl: './request-data.component.html',
  styleUrls: ['./request-data.component.scss']
})
export class RequestDataComponent implements OnInit {

  @Input() id: number;

  item: ServerRequest
  items: ServerRequest[] = []

  constructor( private Service: MainService ) { }

  ngOnInit() {
    this.items = this.Service.setData()
  }

  getItem(id: number): Observable<ServerRequest> {
    return of(this.items.find(item => item.id === id));
  }


}

