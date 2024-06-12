let cart = [];

function addToCart(productId) {
    const product = { id: productId, name: "Product 1", price: 19.99, quantity: 1 };
    const existingProduct = cart.find(item => item.id === productId);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push(product);
    }
    updateCart();
}

function updateCart() {
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartItemsContainer.innerHTML = '';

    let total = 0;
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        const cartItem = document.createElement('div');
        cartItem.innerHTML = `
            <h4>${item.name}</h4>
            <p>Price: $${item.price.toFixed(2)}</p>
            <p>Quantity: ${item.quantity}</p>
            <p>Total: $${itemTotal.toFixed(2)}</p>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    cartTotal.innerText = total.toFixed(2);
}

function checkout() {
    alert('Checkout process initiated.');
    cart = [];
    updateCart();
}