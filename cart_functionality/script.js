// --- CART FUNCTIONALITY ---

// Select elements
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");
let cartContent = document.querySelector(".cart-content");

// Open Cart
cartIcon.onclick = () => {
    cart.classList.add("active");
    document.body.classList.add("cart-open");
};

// Close Cart
closeCart.onclick = () => {
    cart.classList.remove("active");
    document.body.classList.remove("cart-open");
};

// --- CART REMOVE + QUANTITY UPDATE (Event Delegation) ---
document.addEventListener("DOMContentLoaded", () => {
   

    // Handle clicks (remove item)
    cartContent.addEventListener("click", (e) => {
        const removeBtn = e.target.closest(".cart-remove");
        if (removeBtn) {
            const cartBox = removeBtn.closest(".cart-box");
            if (cartBox) cartBox.remove();
            updateTotal();
        }
    });


    

    // Handle quantity input changes
    cartContent.addEventListener("input", (e) => {
        if (e.target.classList.contains("cart-quantity")) {
            let input = e.target;
            if (isNaN(input.value) || input.value <= 0) {
                input.value = 1; // reset invalid input
            }
         updateTotal();
        }
    });
});



// --- ADD TO CART FUNCTIONALITY ---
let addCartButtons = document.getElementsByClassName("add_cart");
for (let i = 0; i < addCartButtons.length; i++) {
    let button = addCartButtons[i];
    button.addEventListener("click", addCartClicked);
}

function addCartClicked(event) {
    let button = event.target;
    let shopProduct = button.parentElement;
    let title = shopProduct.getElementsByClassName("product-title")[0].innerText;
    let price = shopProduct.getElementsByClassName("price")[0].innerText;
    let productImg = shopProduct.getElementsByClassName("product-img")[0].src;

    addProductToCart(title, price, productImg);
    updateTotal();
}

function addProductToCart(title, price, productImg) {
    let cartBox = document.createElement("div");
    cartBox.classList.add("cart-box");

    let cartItemsNames = cartContent.getElementsByClassName("cart-product-title");
    for (let i = 0; i < cartItemsNames.length; i++) {
        if (cartItemsNames[i].innerText === title) {
            alert("This item is already added to the cart!");
            return;
        }
    }

    let cartBoxContent = `
        <img src="${productImg}" alt="" class="cart-img">
        <div class="detail-box">
            <div class="cart-product-title">${title}</div>
            <div class="cart-price">${price}</div>
            <input type="number" value="1" class="cart-quantity">
        </div>
        <i class="ri-delete-bin-line cart-remove"></i>
    `;

    cartBox.innerHTML = cartBoxContent;
    cartContent.append(cartBox);

    // Handle quantity change
    cartBox.querySelector(".cart-quantity").addEventListener("change", quantityChanged);
}


function updateTotal(){
    let cartContent = document.querySelector(".cart-content");
    let cartCBox = cartContent.querySelectorAll(".cart-box");
      let total = 0;

      cartCBox.forEach((box) => {
        let priceCart = box.querySelector(".cart-price");
        let quantityCart = box.querySelector(".cart-quantity");

        let price = parseFloat(priceCart.innerText.replace("$" , ""));
        let quantity = parseInt(quantityCart.value);
         total += price * quantity;
      });

       total = Math.round(total * 100) / 100;
       document.querySelector(".total-price").innerText = "$" + total;
}

// --- QUANTITY CHANGE ---
function quantityChanged(event) {
    let input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateTotal();
}

