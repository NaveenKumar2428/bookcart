import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Service/api.service';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../Service/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

 
  carticon=faCartShopping;
  

  public productList : any;  // this is a property store the data in prodlist coming from api
  

  
  constructor( private api: ApiService, private CartService: CartService, private toastrService: ToastrService)  {
  
  }

  public showSuccess(): void {

    this.toastrService.success('one item added to cart');

  }
  
  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res=>{   
      console.log(typeof res);
      this.productList=res;  // whatever response getting it will store in the Product List
//  this one for add the details of quamtity and total list in cart page
      this.productList.forEach((a:any) => {
      Object.assign(a,{quantity:1,total:a.price});
      });
    })
  }

  addtocart(item:any){  
    this.CartService.addtoCart(item);
  }

}
