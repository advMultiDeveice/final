import * as $ from "jquery";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import {app} from "./firebaseConfig";

const auth = getAuth(); // Initialize Firebase Auth instance

var products = [];

var cart = [];

export const loadPage = (pageID) => {
    if (pageID == '') {
        if(products.length <= 0 ) {
            loadProducts();
        } else{
            
            loadHomePage();
        }
    } else { 
        $.get(`pages/${pageID}.html`, (data) =>{
            $('#app').html(data);
            alert('Loading Cart page')
            if (pageID == "cart"){
                if(cart.length > 0) {
                    $(".cart-items").html("");
                    $.each(cart, (index, productIndex) => {

                        console.log("Cart Index:", index, "Product Index:", productIndex, "Product:", products[productIndex]);
                        let product = products[productIndex];
                        let cartHtml =  ` <div class="coffee-makers">
                        <div class="image-holder">
                           <img src = "${product.productImage}" alt="">
                        </div>
                        
                        <div class="outer-circle">
                            <div class="inner-circle"></div>
                        </div>
                        <div class="prod-title">
                            <h3>${product.productTitle}</h5>
                        </div>
                        <div class="price-holder1">
                            <div class="prices">
                                <div class="red-price">
                                    <span>$${product.productDealPrice}</span>
                                    <div class="pack">With Keurig Starter Kit</div>
                                </div>
                                <div class="black-price">
                                    <span>$${product.productRegularPrice}</span>
                                </div>
                            </div>
                           
                        </div>
                        <div class="price-holder2">
                           <div class="prices">
                            <span>$${product.productRegularPrice}</span>
                           </div>
                        </div>
                    
                        
                        </div>`;

                        $(".cart-items").append(cartHtml);
                    })
                } 
            }
        })

    
    }
}


const clearCart = () => {
    var cart = []; 
    $(".cart-text").html(cart.length); 
    loadPage("cart");
}

export const loadHomePage = () => {
    alert('Loading Home page')
    $(".coffee-makers-holder").html("");
    $.each(products, (index, product) =>{
        let coffeeMakers = 
        ` <div class="coffee-makers">
    <div class="image-holder">
       <img src = "${product.productImage}" alt="">
    </div>
    
    <div class="outer-circle">
        <div class="inner-circle"></div>
    </div>
    <div class="prod-title">
        <h3>${product.productTitle}</h5>
    </div>
    <div class="price-holder1">
        <div class="prices">
            <div class="red-price">
                <span>$${product.productDealPrice}</span>
                <div class="pack">With Keurig Starter Kit</div>
            </div>
            <div class="black-price">
                <span>$${product.productRegularPrice}</span>
            </div>
        </div>
       
    </div>
    <div class="price-holder2">
       <div class="prices">
        <span>$${product.productRegularPrice}</span>
       </div>
    </div>

    <div class="free">
        <div class="truck"></div>
        <div class="free-text">
            <span>Free shipping</span>
        </div>
    </div>

    <div class="buy-now" id = "${index}"><span>Buy Now</span></div>
    </div>`;

    $(".coffee-makers-holder").append(coffeeMakers);
    })
    buyNowListener();
}

const buyNowListener = () => {
    $(".buy-now").on("click", function () {
        let index = $(this).attr("id");
        cart.push(index); 
        $(".cart-text").html(cart.length);
        console.log("buy now clicked", index);
    })
}

const loadProducts = () => {
    $.getJSON('data/data.json', (data)=> {
        products = data.PRODUCTS;
        console.log(products);
        loadHomePage();
    })
}

export function signUserIn (email,password) {

}

export function signUserUp(email, password) {
   
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Sign-up successful
            const user = userCredential.user;
            console.log("User created successfully:", user);
            alert("Account created successfully! Welcome, " + email);
        })
        .catch((error) => {
            // Handle errors
            console.log("Error Code:", error.code);
            console.log("Error Message:", error.message);
        });
}

