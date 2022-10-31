import { Component, OnInit } from '@angular/core';
import { Products } from './../../models/products';
import { ProductsService } from 'src/app/services/products.service';

declare var $: any;

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  datas:Products [] = [];
  constructor(private pros:ProductsService) { }

  ngOnInit(): void {
    this.getAllSP();

    // logo carousel
    $(".logo-carousel-inner").owlCarousel({
      items: 4,
      loop: true,
      autoplay: true,
      margin: 30,
      responsive:{
          0:{
              items:1,
              nav:false
          },
          600:{
              items:3,
              nav:false
          },
          1000:{
              items:4,
              nav:false,
              loop:true
          }
      }
  });
  }

  getAllSP() {
    this.pros.getAll().subscribe((dat:any) => {
      console.log(dat);
      this.datas = dat;
    });
  }

}
