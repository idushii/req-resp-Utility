import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../main.service';
import { ResData } from '../res_data';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.scss']
})
export class RequestListComponent implements OnInit {

  item: ResData;
  items: ResData[];

  constructor(public Service: MainService, private router: Router ) {
  }

  async ngOnInit() {
    this.Service.getAll1().subscribe(items => {
      this.Service.items1$.next(items);
    });
  }

  select(item: ResData) {
    this.Service.activeItem$.next(item);
    // Переход на страницу просмотра
    this.router.navigate(['request/']);
  }

}
