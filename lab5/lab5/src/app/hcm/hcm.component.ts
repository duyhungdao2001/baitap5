import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hcm',
  templateUrl: './hcm.component.html',
  styleUrls: ['./hcm.component.css']
})
export class HCMComponent implements OnInit {
  hcm={
    cd:null,
    cr:null,
    dt:null,
    cv:null,

  }

  constructor() { }

  ngOnInit() {
  }
  
  Tinh(){
    this.hcm.dt = this.hcm.cd*this.hcm.cr;
    this.hcm.cv = (this.hcm.cd+this.hcm.cr)*2;
  }
}
