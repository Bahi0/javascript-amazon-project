import {cart, addToCart} from '../data/cart.js';
import {products, loadProducts} from '../data/products.js';
import { formatCurrency } from './utils/money.js';

loadProducts(renderProductsGrid);

function renderProductsGrid() {
  let productsHTML = '';

  products.forEach((product) => {
    if (!product) return; 
    console.log(product.image);

    productsHTML += `
      <div class="product-container">
              <div class="product-image-container">
                <img class="product-image"
                  src="${product.image}">
              </div>

              <div class="product-name limit-text-to-2-lines">
                ${product.name}
              </div>

              <div class="product-rating-container">
                <img class="product-rating-stars"
                  src="${product.getStarsUrl()}">
                <div class="product-rating-count link-primary">
                ${product.rating.count}
                </div>
              </div>

              <div class="product-price">
                ${product.getPrice()}
              </div>

              <div class="product-quantity-container">
                <select>
                  <option selected value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>

  ${product.extraInfoHTML()}

              <div class="product-spacer"></div>

              <div class="added-to-cart">
                <img src="images/icons/checkmark.png">
                Added
              </div>

              <button class="add-to-cart-button button-primary js-add-to-cart"
              data-product-id="${product.id}">
                Add to Cart
              </button>
            </div>
    `;
  });

  document.querySelector('.js-products-grid').
  innerHTML = productsHTML;
  // below code updating webpage rather than managing so just put it here no need to transfer to cart
  function updateCartQuantity() {

  // below is how to calculate the basket: forEach first then let cartQ above

  let cartQuantity = 0;

  cart.forEach((cartItem) => {
  cartQuantity += cartItem.quantity; //this will add up all quantities and save it to above variable
  });
  //below is the DOM
  document.querySelector('.js-cart-quantity')
  .innerHTML = cartQuantity;
  }

  //below is the code that we run when we add to cart
  document.querySelectorAll('.js-add-to-cart')
  .forEach((button) => {
  button.addEventListener('click', () => {
    const productId = button.dataset.productId;
  addToCart(productId);
  updateCartQuantity();

});
});
}

