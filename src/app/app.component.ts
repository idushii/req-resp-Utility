import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from './main.service';
import { ServerRequest } from './serverRequest';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'req-resp-Utility';

  item: ServerRequest
  items: ServerRequest[] = []

  constructor( private Service: MainService, private router: Router ) { }

  ngOnInit() {
    this.items = this.Service.setData()
    console.log(this.items)
  }

  handleClickItem(item: ServerRequest) {
    //this.router.navigate(['#/' + item.id]);
  }

}
