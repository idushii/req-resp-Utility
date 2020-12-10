import { Component } from '@angular/core';
import { MainService } from './main.service';
import { RequestData } from './request-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'req-resp-Utility';

  item: RequestData
  items: RequestData[]

  constructor( private Service: MainService ) { }

  ngOnInit() {
    this.items = this.Service.getData()
  }

  getitem(id: number) {
    return { id: id }
  }
}
