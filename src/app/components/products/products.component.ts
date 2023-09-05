import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { CartService } from 'src/app/services/cart.service';

import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  faCartPlus = faCartPlus;

  constructor(private productsService:ProductsService, private cartService:CartService ) {

  }

  ngOnInit(): void {
      
  }

  getAllProduct() {
    return this.productsService.getAllProduct()
  }

  addToCart(p_id: number) {
    this.cartService.add(p_id);
  }
}
