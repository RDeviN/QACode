import {Given, When, Then} from 'cucumber';

Given(/^I am on the home page^$/, function(){
    browser.url("https://en.facebookbrand.com");
});

When(/^I click on My Requests and Sign Up with <First Name>, <Last Name>, <Email>, <Password>, <Confirm Password>$/, function(){
    browser.$("/html/body/main/header/nav/ul[2]/li/a").click();
    browser.$("/html/body/main/section/section/article/section/div/div/form/div[6]/a").click();
});

Then(/^I should see a 'I'm not a robot' message$/, function(){
    console.log("Welcome to Sign-up")
});

