import {Given, When, Then} from 'cucumber';

Given(/^I login to my email using my email ID and password^$/, function(){
    browser.url("https://www.gmail.com");
    var emailID = document.evaluate('//*[@id="profileIdentifier"]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
    if(emailID.singleNodeValue.textContent = email){
        emailID.singleNodeValue.click();
        browser.$('/html/body/div[1]/div[1]/div[2]/div/div[2]/div/div/div[2]/div/div[1]/div/form/span/section/div/div/div[1]/div[1]/div/div/div/div/div[1]/div/div[1]/input').setValue(password);
        browser.$('/html/body/div[1]/div[1]/div[2]/div/div[2]/div/div/div[2]/div/div[2]/div/div[1]/div/div/button/div[2]').click();
    }
        else{
        browser.$().click('/html/body/div[1]/div[1]/div[2]/div/div[2]/div/div/div[2]/div/div[1]/div/form/span/section/div/div/div/div/ul/li[2]/div/div/div[2]');
        browser.$('//*[@id="identifierId"]').setValue(email);
        browser.$('/html/body/div[1]/div[1]/div[2]/div/div[2]/div/div/div[2]/div/div[2]/div/div[1]/div/div/button/div[2]').click();
        browser.$('/html/body/div[1]/div[1]/div[2]/div/div[2]/div/div/div[2]/div/div[1]/div/form/span/section/div/div/div[1]/div[1]/div/div/div/div/div[1]/div/div[1]/input').setValue(password);
        browser.$('/html/body/div[1]/div[1]/div[2]/div/div[2]/div/div/div[2]/div/div[2]/div/div[1]/div/div/button/div[2]').click();        
    }
});

When(/^I look out for the verification email I see one in my inbox'$/, function(){
    browser.$('/html/body/div[7]/div[3]/div/div[1]/div[3]/header/div[2]/div[2]/div[2]/form/button[2]/svg').click();
    browser.$('//*[@id=":lm"]').setValue("facebook brand");
    browser.$('//*[@id=":m0"]').click();
    browser.$('/html/body/div[7]/div[3]/div/div[2]/div[1]/div[2]/div/div/div/div/div[2]/div/div[1]/div/div[2]/div[4]/div[2]/div/table/tbody/tr/td[4]/div[2]/span/span').click();
    browser.$('/html/body/div[7]/div[3]/div/div[2]/div[1]/div[2]/div/div/div/div/div[2]/div/div[1]/div/div[3]/div/table/tr/td[1]/div[2]/div[2]/div/div[3]/div/div/div/div/div/div[1]/div[2]/div[3]/div[3]/div/div[2]/a').click();
});

Then(/^I open it to click the verify email link$/, function(){
    console.log("Sign Up is complete!!!")
    var StrUrl = browser.url();
});

