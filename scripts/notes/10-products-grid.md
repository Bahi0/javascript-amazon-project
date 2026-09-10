## 10. Products Grid + Add to Cart

**Goal**: Loop through products array and show them on page + handle "Add to Cart"

### Key Concepts
1. **forEach loop**: `products.forEach((product) => {})` 
   - Runs code for each product in the array
2. **Template strings**: `` `...${product.name}...` ``
   - Lets us put JS variables inside HTML
3. **data-attributes**: `data-product-id="${product.id}"`
   - Stores the product ID on the button so we can read it later
4. **DOM**: `document.querySelector('.js-products-grid').innerHTML`
   - Puts all our HTML onto the page

### How Add to Cart Works
1. Click button → get `productId` from `button.dataset.productId`
2. Check if item already in `cart` array with `forEach`
3. If yes: `matchingItem.quantity += 1`
4. If no: `cart.push({productId, quantity: 1})`
5. Loop through cart again to update `cartQuantity` in the header

### My Notes
- `${(product.priceCents / 100).toFixed(2)}` converts cents to dollars
- `* 10` in rating image because stars are like 4.5 → rating-45.png
- Need to remember: update DOM AFTER updating cart array

### Code File
See: `scripts/10-products-grid.js`