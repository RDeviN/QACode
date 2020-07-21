import {Given, When, Then} from 'cucumber';

Given(/^I am still on the home page^$/, function(){
    console.log("Almost done. Complete the remaining details.", StrUrl)
});

When(/^I manually select 'I'm not a robot' and click 'Sign Up'$/, function(){
   //sleep to facilitate manual check of 'I'm not a robot'
   function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function demo() {
    await sleep(15000);
  }
  
  demo();
  
  browser.$('/html/body/main/section/section/article/section/div/div/form/div[7]/button[1]').click();
});

Then(/^I should see email verification instruction$/, function(){
    console.log("Sign Up is complete!!!")
});

