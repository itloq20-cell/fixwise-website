// Get the main HTML elements
const cartItemsContainer = document.getElementById("cartItemsContainer");
const cartMessage = document.getElementById("cartMessage");

const subTotal = document.getElementById("subTotal");
const taxAmount = document.getElementById("taxAmount");
const totalAmount = document.getElementById("totalAmount");


let cart = JSON.parse(localStorage.getItem("cart")) || [];

// This is the tax for one service.
// We are using 0.50 because your old cart design used $0.50 tax for one item.
const taxPerService = 0.50;

// This function displays the cart items on the page
function displayCartItems() {
  cartItemsContainer.innerHTML = "";

  if (cart.length === 0) {
    cartMessage.textContent = "Your cart is empty. Please add a service first.";
  } else {
    cartMessage.textContent = "";
  }

  for (let i = 0; i < cart.length; i++) {
    const item = cart[i];

    cartItemsContainer.innerHTML += `
      <div class="cart-items">
        <img class="cart-item-img" src="${item.image}" alt="${item.serviceName}" />

        <div class="cart-service-info">
          <p class="cart-service-name">${item.serviceName}</p>

          <p class="cart-service-detail">Issue Type: ${item.issueType}</p>
          <p class="cart-service-detail">Description: ${item.issueDescription}</p>

          <p class="cart-service-price">$${item.price.toFixed(2)}</p>

          <div class="cart-control-buttons">
            <div class="control-buttons">
              <button type="button" class="qty-btn decrease-btn">−</button>
              <span class="qty-value">${item.quantity}</span>
              <button type="button" class="qty-btn increase-btn">+</button>
            </div>

            <button type="button" class="remove-btn">Remove</button>
          </div>
        </div>
      </div>
    `;
  }

  updateOrderSummary();
}

// This function calculates subtotal, tax, and total
function updateOrderSummary() {
  let subtotalValue = 0;
  let taxValue = 0;

  for (let i = 0; i < cart.length; i++) {
    subtotalValue = subtotalValue + (cart[i].price * cart[i].quantity);
    taxValue = taxValue + (taxPerService * cart[i].quantity);
  }

  let totalValue = subtotalValue + taxValue;

  subTotal.textContent = "$" + subtotalValue.toFixed(2);
  taxAmount.textContent = "$" + taxValue.toFixed(2);
  totalAmount.textContent = "$" + totalValue.toFixed(2);
}

// Run the function when the page opens
displayCartItems();

const confirmBtn = document.getElementById("confirmBtn");

confirmBtn.addEventListener("click", function(event) {
  const savedCart = JSON.parse(localStorage.getItem("cart")) || [];

  if (savedCart.length === 0) {
    event.preventDefault();
    cartMessage.textContent = "You cannot confirm your booking because your cart is empty.";
  }
});