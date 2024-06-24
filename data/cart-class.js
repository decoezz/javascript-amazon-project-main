//import { getDeliveryOption } from "./delivryoptions";

class Cart{
    localStorageKey;
    cartItems;

    constructor(localStorageKey){
        this.localStorageKey = localStorageKey;    
        this.loadFromStorage();
    }
    loadFromStorage(){
        this.cartItems = JSON.parse(localStorage.getItem((this.localStorageKey)));
        if(!this.cartItems){
        this.cartItems = [{
      productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity:2,
      deliveryOptionId :'1'
      },{
      productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
      quantity:1,
      deliveryOptionId :'2'
      }];
  }
    }
    savetostorage(){
        localStorage.setItem(this.localStorageKey,JSON.stringify(this.cartItems));
    }
    addtocart(productId){
        let matchingitem;
              this.cartItems.forEach((cartItem)=>{
                if(productId === cartItem.productId){
                  matchingitem = cartItem;
                }
              });
              if(matchingitem){
                matchingitem.quantity+=1;
              }else{
                this.cartItems.push({
                  productId:productId,
                  quantity:1,
                  deliveryOptionId :'1'
                })
              }
              this.savetostorage();
      }
      deletefromcart(productId){
        const newcart =[];
        this.cartItems.forEach((cartItem)=>{
          if(cartItem.productId !== productId){
            newcart.push(cartItem);
          }
        })
        this.cartItems = newcart;
        this.savetostorage();
      }
      updateDeliveryOption(productId,deliveryOptionId){
        let matchingitem;
        this.cartItems.forEach((cartItem)=>{
          if(productId === cartItem.productId){
            matchingitem = cartItem;
          }
        });
        matchingitem.deliveryOptionId = deliveryOptionId;
        this.savetostorage();
      }
}
const cart = new Cart('cart-oop');
const businessCart = new Cart('cart-business');
console.log(cart);
console.log(businessCart);
console.log(businessCart instanceof Cart);