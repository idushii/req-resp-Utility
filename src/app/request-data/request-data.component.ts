import { Component, Input, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { RequestData } from '../request-data';

@Component({
  selector: 'app-request-data',
  templateUrl: './request-data.component.html',
  styleUrls: ['./request-data.component.scss']
})
export class RequestDataComponent implements OnInit {

  @Input() id: number;

  item: RequestData

  constructor( private Service: MainService ) { }

  ngOnInit() {
    if(this.id) {
      this.item = this.Service.getByID(this.id);
    }
  }
}

