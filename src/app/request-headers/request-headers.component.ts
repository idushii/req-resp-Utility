import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-request-headers',
  templateUrl: './request-headers.component.html',
  styleUrls: ['./request-headers.component.css']
})
export class RequestHeadersComponent implements OnInit {
  @Input() headers: { [x: string]: string | object };

  get items() {
    if (!this.headers) return [];

    const keys = Object.keys(this.headers);

    return  keys.map(item  => {
      if (typeof this.headers[item] === 'string') {
        return ({key: item, value: this.headers[item]});
      } else {
        return ({key: item, value: Object.values(this.headers[item]).join('')});
      }
    });
  }

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.headers);
  }

}
