import {Component, OnInit} from '@angular/core';
import {MainService} from './main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'req-resp-Utility';

  constructor(public Service: MainService) {
  }

  async ngOnInit() {
    this.Service.getAll1().subscribe(items => {
      this.Service.items1$.next(items);
    });
  }
}
