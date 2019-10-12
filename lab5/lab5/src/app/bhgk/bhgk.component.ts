import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bhgk',
  templateUrl: './bhgk.component.html',
  styleUrls: ['./bhgk.component.css']
})
export class BhgkComponent implements OnInit {

  sanpham = [
    {
      name: "Nước Ngọt",
      price: 10000,
      amount: null,
      isValid: true,
      totalPrice: 0
    },
    {
      name: "Cà Phê Đen",
      price: 12000,
      amount: null,
      isValid: true,
      totalPrice: 0
    },
    {
      name: "Thuốc Lá",
      price: 18000,
      amount: null,
      isValid: true,
      totalPrice: 0
    }
  ];
  constructor() { }

  ngOnInit() {
    
  }
  

}
