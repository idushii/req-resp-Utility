import { Component, OnInit } from '@angular/core';
import {MainService} from '../main.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DeviceInfo} from "../res_data";

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styles: [
  ]
})
export class SessionsComponent implements OnInit {
  deviceUUID: string;

  constructor(public mainService: MainService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.deviceUUID = params.device;
      if (params.device) {
        this.mainService.selectSessions(this.deviceUUID);
        this.mainService.selectDevice(this.deviceUUID);
      }
    });
  }

  goTo(sessionId: string): void {
    this.router.navigate([`/device/${this.deviceUUID}/session/${sessionId}`]);
  }

}
