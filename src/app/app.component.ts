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
    if(this.items.length > 10) {
      this.items.slice(this.items.length-10, this.items.length)
    }
  }

  getitem(id: number) {
    return { id: id }
  }
}
