import {Given, When, Then} from 'cucumber';

Given(/^I login to Facebook Branding using my email ID and password^$/, function(){
    browser.$('//*[@id="signin-email"]').setValue(email);
    browser.$('//*[@id="signin-password"]').setValue(password);    
});

When(/^I click on sign In'$/, function(){
    browser.$('/html/body/main/section/section/article/section/div/div/form/div[4]/button[1]').click();
});

Then(/^I am able to login and see no requests$/, function(){
      var getMessage = document.evaluate('/html/body/main/section/section/article/section/div/div/form/div[4]/button[1]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
      var message = getMessage.singleNodeValue.textContent;
      console.log(message);
});

