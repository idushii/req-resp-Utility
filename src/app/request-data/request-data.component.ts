import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from '../main.service';
import { ResData } from '../res_data';

@Component({
  selector: 'app-request-data',
  templateUrl: './request-data.component.html',
  styleUrls: ['./request-data.component.scss']
})
export class RequestDataComponent implements OnInit {

  id: number
  item: ResData

  constructor( private Service: MainService, private route: ActivatedRoute ) { }

  ngOnInit() {
    //this.route.params
    //    .subscribe(params => {
     //   this.id =  Number(params.id);
    //   });
    this.item = this.Service.getItem();
    console.log(this.item)
  }
}

