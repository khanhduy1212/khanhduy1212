import { Component, OnInit } from '@angular/core';

import { Products } from './../../models/products';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { from } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
declare var $: any;

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss']
})
export class ProductdetailsComponent implements OnInit {
  product = new Products;

  constructor(private route:ActivatedRoute, private productsService:ProductsService,
    private cartService: CartService) { }

  ngOnInit(): void {
    this.getAllDetail(this.route.snapshot.params['maSP']);

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

  getAllDetail(maSP:number){
    this.productsService.get1Product(maSP).subscribe((data:any) =>
    {
      this.product = data;
    });
  }

  addToCart(product: Products) {
    this.cartService.AddToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}
