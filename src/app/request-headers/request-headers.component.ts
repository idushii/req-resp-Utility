import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-request-headers',
  templateUrl: './request-headers.component.html',
  styleUrls: ['./request-headers.component.css']
})
export class RequestHeadersComponent implements OnInit {
  @Input() headers: { [x: string]: string };

  get items() {
    if (!this.headers) return [];

    const keys = Object.keys(this.headers);

    return  keys.map(item  => ({key: item, value: this.headers[item]}));
  }

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.headers);
  }

}
