import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { ServerRequest } from '../serverRequest';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.scss']
})
export class RequestListComponent implements OnInit {

  item: ServerRequest
  items: ServerRequest[] = []

  constructor( private Service: MainService ) { }

  ngOnInit() {
    this.Service.getAll()
    .subscribe((resp: ServerRequest[]) => {
        this.items = resp
    });
  }

}
