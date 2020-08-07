import java.io.File;
import java.net.MalformedURLException;
import java.net.URL;

import org.openqa.selenium.remote.DesiredCapabilities;

import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.android.AndroidElement;
import io.appium.java_client.remote.MobileCapabilityType;

public class base {
	public static  AndroidDriver<AndroidElement> capabilities() throws MalformedURLException
	{
        //.apk location
		File appDir = new File("src");
        File app = new File(appDir, "ApiDemos-debug (1).apk");
        
        //Capability Set-up
        DesiredCapabilities capabilities = new DesiredCapabilities();
        capabilities.setCapability(MobileCapabilityType.DEVICE_NAME, "Ramya-Emulator");
        capabilities.setCapability(MobileCapabilityType.APPLICATION_NAME, "uiautomator2");
        capabilities.setCapability(MobileCapabilityType.NEW_COMMAND_TIMEOUT, 15);
        capabilities.setCapability(MobileCapabilityType.APP, app.getAbsolutePath());
        
        //connect to Appium
        AndroidDriver<AndroidElement> driver = new AndroidDriver<>(new URL("http://127.0.0.1:4723/wd/hub/"), capabilities);
        return driver;
        

	}
}
