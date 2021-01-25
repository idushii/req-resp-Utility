import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MainService} from '../main.service';
import {ResData} from '../res_data';
import {combineLatest} from 'rxjs';

@Component({
  selector: 'app-request-data',
  templateUrl: './request-data.component.html',
  styleUrls: ['./request-data.component.scss']
})
export class RequestDataComponent implements OnInit {

  id: number;
  item: ResData;
  deviceUUID: string;
  sessionId: number;

  constructor(private mainService: MainService, private route: ActivatedRoute) {
  }

  get itemPayload(): any {
    try {
      return JSON.parse(this.item.payload);
    } catch (e) {
      return this.item?.payload;
    }
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.deviceUUID = params.device;
      this.sessionId = params.sessionId;

      if (params.device) {
        this.mainService.selectDevice(this.deviceUUID, this.sessionId);
      }
    });

    combineLatest([
      this.route.params,
      this.mainService.items1$
    ])
      .subscribe(([params, items]) => {
        this.id = params.id;
        this.item = items.find(item => item.id === this.id);
        console.log(this.item);
      });
  }
}

