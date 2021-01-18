import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MainService} from '../main.service';
import {DeviceInfo, ResData} from '../res_data';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.scss']
})
export class RequestListComponent implements OnInit {

  items: ResData[];
  deviceUUID: string;
  sessionId: number;
  device: DeviceInfo;

  constructor(public mainService: MainService, private router: Router, private route: ActivatedRoute) {
  }

  async ngOnInit(): Promise<void> {
    this.route.params.subscribe((params) => {
      this.deviceUUID = params.device;
      this.sessionId = Number(params.sessionId ?? '0');
      if (params.device) {
        this.mainService.selectSessions(this.deviceUUID);
        this.mainService.selectDevice(this.deviceUUID, this.sessionId);
      }
    });

    this.mainService.activeDevice$.subscribe((device) => {
      if (device?.activeSession && device.activeSession !== this.sessionId) {
        // this.mainService.selectDevice(this.deviceUUID, device.activeSession);
        this.goTo(device.activeSession);
        this.sessionId = device.activeSession;
      }
    });
  }

  select(item: ResData): void {
    this.mainService.activeItem$.next(item);
    // Переход на страницу просмотра
    this.router.navigate([`device/${this.deviceUUID}/session/${this.sessionId}/request/${item.id}`]);
  }

  goTo(sessionId: number): void {
    this.router.navigate([`device/${this.deviceUUID}/session/${sessionId}`]);
  }
}
