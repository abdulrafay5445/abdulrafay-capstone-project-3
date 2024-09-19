// Array to hold cart items
let cart = [];

// Function to update cart display in the off-canvas
function updateCartDisplay() {
    const cartItemsDiv = document.getElementById('cartItems');
    cartItemsDiv.innerHTML = ` <div class="alert alert-success text-dark-emphasis fs-sm border-0 rounded-4 mb-0" role="alert">
          Congratulations 🎉 You have added more than <span class="fw-semibold">$50</span> to your cart. <span class="fw-semibold">Delivery is free</span> for you!
        </div>`

    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }

    cart.forEach((item, index) => {
        cartItemsDiv.innerHTML += `
              <div class="d-flex justify-content-between align-items-center mb-3">
                  <img src="${item.img}" alt="${item.name}" style="width: 50px; height: 50px;" class="me-3">
                  <div class="flex-grow-1">${item.name} - $${item.price} x ${item.quantity}</div>
                  <div>
                      <button class="btn btn-sm btn-light" onclick="updateQuantity(${index}, -1)">-</button>
                      <span>${item.quantity}</span>
                      <button class="btn btn-sm btn-light" onclick="updateQuantity(${index}, 1)">+</button>
                  </div>
              </div>
              <hr/>
          `;
    });

    // Update the cart quantity badge and total price
    updateCartQuantityBadge();
    updateTotalPrice();
}

// Add to Cart button click event
document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', function () {
        const productName = this.getAttribute('data-name');
        const productPrice = parseFloat(this.getAttribute('data-price'));
        const productImg = this.getAttribute('data-img');

        // Check if product already in cart
        const existingProduct = cart.find(item => item.name === productName);

        if (existingProduct) {
            // If product exists, just increase quantity
            existingProduct.quantity += 1;
        } else {
            // Otherwise, add new product to cart
            cart.push({
                name: productName,
                price: productPrice,
                img: productImg,
                quantity: 1
            });
        }

        // Update the cart display
        updateCartDisplay();
    });
});

// Function to update quantity
function updateQuantity(index, change) {
    cart[index].quantity += change;

    if (cart[index].quantity <= 0) {
        cart.splice(index, 1); // Remove item if quantity becomes zero
    }
    updateCartDisplay(); // Refresh cart display
}
// Function to update the cart quantity badge
function updateCartQuantityBadge() {
    const cartQuantityBadge = document.getElementById('cartQuantityBadge');
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    cartQuantityBadge.innerText = totalItems;

    // Hide badge if no items
    if (totalItems === 0) {
        cartQuantityBadge.style.display = 'none';
    } else {
        cartQuantityBadge.style.display = 'block';
    }
}

// Function to update total price
function updateTotalPrice() {
    const totalPriceElement = document.getElementById('totalPrice');
    const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0).toFixed(2);
    totalPriceElement.innerText = `$${totalPrice}`;
}

document.getElementById('cartQuantityBadge').style.display = 'none';