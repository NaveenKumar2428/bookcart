import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})                        // service is used for pass any data across the components
export class CartService {

  public cartItemList: any =[]  
  public ProductList = new BehaviorSubject<any>([]);  // it can emmit and pass the value. it will act as boolean and observable and this can also be a subscribe
  
                                                    
  constructor() { }
  
  
 
  saveCart(): void {
    localStorage.setItem('cart_items', JSON.stringify(this.ProductList));
  }

  loadCart(): void {
    this.ProductList = JSON.parse(localStorage.getItem('cart_items') as any) || [];
  }

  getProducts(){ // whoever call this they will get data present inside it and user can subscribe also
    return this.ProductList.asObservable();
  }

  addtoCart(product:any){
    this.cartItemList.push(product);  // push the product whatever we are passing
    this.ProductList.next(this.cartItemList); // it will get pass where ever it is called or subscribe & passing to the cardlist
    this.getTotalPrice();  // it will show the total price of product
    console.log(this.cartItemList)
    this.saveCart();
  }

  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }
 
  removeCardItem(product: any){
    this.cartItemList.map((a:any, index:any)=>{  // here index means which we need to remove it 
      if(product.id=== a.id){
        this.cartItemList.splice(index,1); // here we have splice the index item
      }
    })
    this.ProductList.next(this.cartItemList); // cart icon function for remove the products list no
  }
  removeAllCart(){
    this.cartItemList =[]
    this.ProductList.next(this.cartItemList)
  }
}
