import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MainService} from '../main.service';
import {ResData} from '../res_data';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.scss']
})
export class RequestListComponent implements OnInit {

  items: ResData[];
  deviceUUID: string;

  constructor(public mainService: MainService, private router: Router, private route: ActivatedRoute) {
  }

  async ngOnInit(): Promise<void> {
    this.route.params.subscribe((params) => {
      this.deviceUUID = params.device;
      if (params.device) {
        this.mainService.selectDevice(params.device);
      }
    });
  }

  select(item: ResData): void {
    this.mainService.activeItem$.next(item);
    // Переход на страницу просмотра
    this.router.navigate([`device/${this.deviceUUID}/request/${item.id}`]);
  }

}
