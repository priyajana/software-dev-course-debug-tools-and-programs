const cart = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Headphones", price: 200 }
];

/**
 * 
 * using the developer tools in the browser, I set up a debugger in the JS file
 * I was able to watch the program control flow, and find the mistakes in the code.
 * I could see the typeerror in the browser console for invalid index to the cart object.
 */

function calculateTotal(cartItems) {
  let total = 0;
  // Removed the <= condition so that the cartItems object is not accessed with an invalid index.
  for (let i = 0; i < cartItems.length; i++) { 
      total += cartItems[i].price; 
  }
  return total;
}

function applyDiscount(total, discountRate) {
  // Adding validation for the discountRate
  if(discountRate > 0){
    return total - total * discountRate; 
  }
  return ;
  
}

function generateReceipt(cartItems, total) {
  let receipt = "Items:\n";
  // Added a isNaN check to validate if total is a number
  if(!isNaN(total))
    {
    cartItems.forEach(item => {
        receipt += `${item.name}: $${item.price}\n`;
    });
    receipt += `Total: $${total.toFixed(2)}`; 
   }
  return receipt;
}

// Debugging entry point
debugger;
console.log("Starting shopping cart calculation...");
const total = calculateTotal(cart);
const discountedTotal = applyDiscount(total, 0.2); // 20% discount
const receipt = generateReceipt(cart, discountedTotal);

document.getElementById("total").textContent = `Total: $${discountedTotal}`;
document.getElementById("receipt").textContent = receipt;