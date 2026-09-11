   <!----<script defer src="amazon.js"></script>-->
  problem using script tags like this

    <script src="data/cart.js" defer></script>
    <script src="data/products.js" defer></script>
    <script src="scripts/amazon.js" defer></script>

    above code can cause naming conflict.

    const cart = []; 
    we can't make to of this in a separate js file. this means we can't use ''cart' in any other files
    we made 2 the same variables of this as cart.js and amazon.js in javascript, which is not allowed
    it's called naming conflict. same name variables
  
  how to create module:
  delete this in html:
  
    <script src="data/cart.js" defer></script>
    when we use script tag it will run all the code inside cart.js here : const cart = []; so, remove script tag  <script src="data/cart.js" defer></script>
    create module: 1> create file 2.don't load file with script 3. create variable inside cart.js

    how to get variable out of file:
    1. Add type = "module" attribute inside scripts/amazon in line 206 we changed  <script type="module" src="scripts/amazon.js" defer></script>
    2. export in cart.js add the word "export" : -export const cart = [];
    3. import : go to amazon.js type at the top :
    -import {cart} from '../data/cart.js';
    note:1. put all import at the top of the file 2. open file from live server to work not from folder