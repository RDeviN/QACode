import java.io.File;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.remote.DesiredCapabilities;

import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.android.AndroidElement;
import io.appium.java_client.remote.MobileCapabilityType;

public class base_webapp {
	public static  AndroidDriver<AndroidElement> capabilities() throws MalformedURLException
{
AndroidDriver<AndroidElement>  driver;

     DesiredCapabilities capabilities = new DesiredCapabilities();
     //capabilities.setCapability("chromedriverExecutable","D:\\Automation_Project\\MobileAutomationBestPractices\\drivers\\chromedriver.exe");
    
     capabilities.setCapability(MobileCapabilityType.DEVICE_NAME, "Ramya-Emulator");
     
     capabilities.setCapability(MobileCapabilityType.BROWSER_NAME,"Chrome");
    
  //   capabilities.setCapability(MobileCapabilityType.APP, app.getAbsolutePath());
    driver = new AndroidDriver<>(new URL("http://127.0.0.1:4723/wd/hub"), capabilities);
   
   return driver;
}

}