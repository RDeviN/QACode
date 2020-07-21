import {Given, When, Then} from 'cucumber';
import loginPage from './features/pageobjects/login.page';

Given(/^I am on the home page^$/, function(){
    browser.url("https://en.facebookbrand.com");
});

When(/^I click on My Requests and Sign Up with <First Name>, <Last Name>, <Email>, <Password>, <Confirm Password>$/, function(){
    browser.$("/html/body/main/header/nav/ul[2]/li/a").click();
    browser.$("/html/body/main/section/section/article/section/div/div/form/div[6]/a").click();
    browser.$('//*[@id="first_name"]').setValue(firstname);
    browser.$('//*[@id="last_name"]').setValue(lastname);
    browser.$('//*[@id="email"]').setValue(email);
    browser.$('//*[@id="password"]').setValue(password);
    browser.$('//*[@id="password-confirm"]').setValue(password);
});

Then(/^I should see a 'I'm not a robot' message$/, function(){
    var captcha = document.evaluate('//*[@id="recaptcha-anchor-label"]', document, null,XPathResult.FIRST_ORDERED_NODE_TYPE, null);
    var status = captcha.singleNodeValue.checked;
    if(!status){
    console.log("Rush now to prove that you are a human!!!"); 
    }   
});

