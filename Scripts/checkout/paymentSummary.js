import { cart } from "../../data/cart.js";
import { getProduct } from "../../data/products.js";
import { getDeliveryOption } from "../../data/delivryoptions.js";
import { formatcurrency } from "../utils/money.js";
export function renderPaymentSummary(){
    let productPriceCents = 0;
    let ShippingPriceCents =0;
    cart.forEach((cartItem) => {
        const product =getProduct(cartItem.productId);
        if (product) {
            productPriceCents += product.priceCents * cartItem.quantity;
          } else {
            console.error(`Product with ID ${cartItem.productId} not found`);
          }
          const deliveryOption =getDeliveryOption(cartItem.deliveryOptionId);
          ShippingPriceCents+=deliveryOption.priceCents
    });
    const totalbeforeTaxCents = productPriceCents + ShippingPriceCents;
    const taxCents = totalbeforeTaxCents * 0.1;
    const totalCents = totalbeforeTaxCents + taxCents;
    const paymentSummaryHTML = 
    `
    <div class="payment-summary">
          <div class="payment-summary-title">
            Order Summary
          </div>

          <div class="payment-summary-row">
            <div>Items (3):</div>
            <div class="payment-summary-money">
            $${formatcurrency(productPriceCents)}
            </div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">
            $${formatcurrency(ShippingPriceCents)}
            </div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">
            $${formatcurrency(totalbeforeTaxCents)}
          </div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">
            $${formatcurrency(taxCents)}
            </div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">
            $${formatcurrency(totalCents)}
            </div>
          </div>

          <button class="place-order-button button-primary">
            Place your order
          </button>
    `;
    document.querySelector('.js-payment-summary')
    .innerHTML = paymentSummaryHTML;
}