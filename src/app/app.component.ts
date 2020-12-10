import {Component} from '@angular/core';
import {MainService} from './main.service';
import {RequestData} from './request-data';
import {ResData} from './res_data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'req-resp-Utility';

  item: RequestData;
  items: ResData[];

  constructor(public Service: MainService) {
  }

  async ngOnInit() {
    this.Service.getAll1().subscribe(items => {
      this.Service.items1$.next(items);
    });
  }

  get handleClickParams() {
    return {
      id: this.item.id
    };
  }

  select(item: ResData) {
    this.Service.activeItem$.next(item);
    // Переход на страницу просмотра
  }
}
