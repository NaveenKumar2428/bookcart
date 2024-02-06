import { Component, OnInit } from '@angular/core';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../Service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  plus=faPlusCircle;
  minus=faMinusCircle;
  delete=faTrash;

  public products : any = [];
  public grandTotal : number =0;


  constructor(private cartService: CartService,private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{  // to store the all the data and then go inside
      this.products = res; 
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }

  removeItem(item: any){
    this.cartService.removeCardItem(item);
    this.toastrService.warning('Product Removed form Cart');
   
  }

  emptycart(){
    this.cartService.removeAllCart();
  }

}
