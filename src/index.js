import * as $ from "jquery";
import {loadPage, loadHomePage, signUserUp} from "./model.js";


// import { signUserUp, signUserIn, } from "./model.js";
// import { getAuth, signOut } from "firebase/auth"; 

// const auth = getAuth(); 


const changeRoute = () => {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace('#', '');

    if (pageID === 'home' || pageID === '') {
        pageID = ''; // Treat as default homepage logic
    }
    
    loadPage(pageID);

}

const navListener = () => {
    $(".logo").on("click", () => {
        console.log("logo clicked")
        window.location.hash = 'home';

       
    })
    $(".account").on("click", () => {
        console.log("account clicked")
        window.location.hash = "account";
    })
    $(".cart").on("click", () => {
        console.log("cart clicked")
        window.location.hash = "cart";
    })
}


const signUp = () => {
    $(document).on("click", ".btn-submit", () => {
        const signEmail = $("#signup-email").val();
        const signPw = $("#signup-password").val();

        signUserUp("button clicked", signEmail, signPw);
    });
}

const login = () => {
    $(document).on("click", ".btn-submitLog", () => {
        const logEmail = $("#login-email").val();
        const logPw = $("#login-password").val();

        console.log("button clicked", logEmail, logPw);
    });
}






function initURLListener() {
    $(window).on('hashchange', changeRoute);
    changeRoute();
}


$(document).ready(function () {
    loadPage("home")
    initURLListener();
    navListener();
    signUp();
    login();
  

    
});