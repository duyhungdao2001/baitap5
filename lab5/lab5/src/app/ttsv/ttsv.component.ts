import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ttsv',
  templateUrl: './ttsv.component.html',
  styleUrls: ['./ttsv.component.css']
})
export class TtsvComponent implements OnInit {
  ttsv={
    name:"",
    date:"",
    gt:"Nam",
    point: null,
    hocluc: "",
  }

  constructor() { }

  xeploai(){
    if (this.ttsv.point < 5){
      this.ttsv.hocluc = "Rớt";
      document.getElementById("doimau").style.backgroundColor = "red";
    }
    else{
      this.ttsv.hocluc = "Đậu"
      document.getElementById("doimau").style.backgroundColor = "aqua";
    }
  }

  ngOnInit() {
  }

}
