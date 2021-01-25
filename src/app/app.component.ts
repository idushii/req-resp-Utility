import {Component, OnInit} from '@angular/core';
import {MainService} from './main.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'req-resp-Utility';

  constructor(public mainService: MainService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.mainService.getDevices();
  }

}
