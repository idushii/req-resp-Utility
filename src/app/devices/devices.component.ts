import {Component, OnInit} from '@angular/core';
import {MainService} from '../main.service';
import {DeviceInfo} from '../res_data';
import {Router} from '@angular/router';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {

  constructor(public mainService: MainService, private router: Router) {
  }

  ngOnInit(): void {
  }

  goTo(item: DeviceInfo): void {
    this.router.navigate([`/device/${item.identifier}`]);
  }
}
