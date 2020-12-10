import { Component } from '@angular/core';
import { MainService } from './main.service';
import { RequestData } from './request-data';
import {ServerRequest} from "./serverRequest";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'req-resp-Utility';

  item: RequestData
  items: any[]

  constructor( public Service: MainService ) { }

  async ngOnInit() {
    this.Service.getAll1().snapshotChanges().subscribe((res) => {
      this.items = res.map(item  => item.payload.toJSON()) as ServerRequest[];

      console.log([...this.items]);
    });
  }

  get handleClickParams() {
    return {
      id: this.item.id
    }
  }

}
