package com.pages;

import java.util.List;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.reusableFunctions.SeleniumUtilities;

public class Crm_DealsPage {
	
	WebDriver driver;
	
	@FindBy(xpath="//div[@id='main-nav']/div[5]/a/i")
	WebElement dealsIcon;
	@FindBy(xpath="//div[@id='dashboard-toolbar']/div[2]/div/a[3]/button")
	WebElement newBtn;
	@FindBy(xpath="//input[@name='title']")
	WebElement dealTitle;
	@FindBy(xpath="//input[@name='amount']")
	WebElement ammount; 
	@FindBy(xpath="//input[@name='commission']")
	WebElement commission;
	@FindBy(xpath="//div[@name='stage' and @role='listbox']")
	WebElement stageDropDown;
	@FindBy(xpath="//div[@name='stage' and @role='listbox']/div[2]/div/span")
	List<WebElement> stageList;
	@FindBy(xpath="//button[@class='ui linkedin button']")
	WebElement saveBtn;
//	@FindBy(xpath="")
//	WebElement 
//	@FindBy(xpath="")
//	WebElement 
	
	public Crm_DealsPage(WebDriver driver) {
		this.driver =driver;
		PageFactory.initElements(driver, this);
	}
	
	public void createNewDeal() {
		dealsIcon.click();
		newBtn.click();
	
	}
	public void enterTitle(String tName) {
		dealTitle.sendKeys(tName);
	}
	public void enterAmmount(String amm) {
		ammount.sendKeys(amm);
	}
	public void enterCommission(String comm) {
		commission.sendKeys(comm);
	}
	public void selectStage(String stage) {
		stageDropDown.click();
		for (WebElement ele : stageList) {
			if(ele.getText().contentEquals(stage))
				ele.click();
			break;
			
		}
	}
	public void clickOnSaveBtn() {
		saveBtn.click();
	}
	

}
