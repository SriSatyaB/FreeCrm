package com.stepDefinitions;

import java.io.File;
import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

import com.baseClasses.Library;
import com.google.common.io.Files;
import com.pages.Crm_LoginPage;
import com.reusableFunctions.SeleniumUtilities;
import com.vimalselvam.cucumber.listener.Reporter;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;

public class Hook extends Library{
	
	@Before
	public void setUp() {
		browserSetUp();
	}
	@After 
	public void tear(Scenario scenario) throws IOException {
		
		String screenshotName = scenario.getName().replaceAll(" ", "_");
//		File sourcePath = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
//		 
//		 
//		 File destinationPath = new File("/FreeCrm/Reports/cucumber-html-report/screenshots/" + screenshotName + ".png");
//		 Files.copy(sourcePath, destinationPath);
//		 Reporter.addScreenCaptureFromPath(destinationPath.toString());
	SeleniumUtilities su = new SeleniumUtilities(driver);
	su.to_take_screenshot("src/test/resources/Screenshots/"+screenshotName+".png");
	//Reporter.addScreenCaptureFromPath(source.getAbsolutePath());
	tearDown();
	}
}


