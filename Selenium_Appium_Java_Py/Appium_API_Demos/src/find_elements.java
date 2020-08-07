import java.net.MalformedURLException;
import java.util.concurrent.TimeUnit;

import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.android.AndroidElement;

public class find_elements extends base {
	public static void main(String[] args) throws MalformedURLException {	
        AndroidDriver<AndroidElement> driver = capabilities();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        
        /*driver.findElementByXPath("//android.widget.TextView[@text='Preference']").click();
        driver.findElementByXPath("//android.widget.TextView[@text='1. Preferences from XML']").click();
        driver.findElementById("android:id/checkbox").click();
        driver.findElementByXPath("(//android.widget.RelativeLayout)[2]").click();
        driver.findElementById("android:id/edit").sendKeys("Elephant");
        driver.findElementById("android:id/button1").click();*/
              
        //driver.findElementByXPath("//*[@text='Preference']").click();
        //driver.findElementByClassName("android.widget.TextView").get(11).click();
        driver.findElementByAndroidUIAutomator("text(\"Preference\")").click();
	}
}
