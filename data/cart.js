//import { getDeliveryOption } from "./delivryoptions";
export let cart = JSON.parse(localStorage.getItem('cart'));
  if(!cart){
    cart = [{
      productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity:2,
      deliveryOptionId :'1'
      },{
      productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
      quantity:1,
      deliveryOptionId :'2'
      }];
  }

function savetostorage(){
  localStorage.setItem('cart',JSON.stringify(cart));
}

export function addtocart(productId){
    let matchingitem;
          cart.forEach((cartItem)=>{
            if(productId === cartItem.productId){
              matchingitem = cartItem;
            }
          });
          if(matchingitem){
            matchingitem.quantity+=1;
          }else{
            cart.push({
              productId:productId,
              quantity:1,
              deliveryOptionId :'1'
            })
          }
          savetostorage();
  }
export function deletefromcart(productId){
  const newcart =[];
  cart.forEach((cartItem)=>{
    if(cartItem.productId !== productId){
      newcart.push(cartItem);
    }

  })
  cart = newcart;
  savetostorage();
}
export function updateDeliveryOption(productId,deliveryOptionId){
  let matchingitem;
  cart.forEach((cartItem)=>{
    if(productId === cartItem.productId){
      matchingitem = cartItem;
    }
  });
  matchingitem.deliveryOptionId = deliveryOptionId;
  savetostorage();

}