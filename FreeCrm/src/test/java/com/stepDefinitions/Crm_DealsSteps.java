package com.stepDefinitions;

import java.util.Map;

import com.baseClasses.Library;
import com.pages.Crm_DealsPage;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class Crm_DealsSteps extends Library {

	Crm_DealsPage dp;

	@Given("user is on the homePage")
	public void user_is_on_the_homePage() {

	}

	@When("user clicks on the New Btn")
	public void user_clicks_on_the_New_Btn() {
		dp = new Crm_DealsPage(driver);
		dp.createNewDeal();
	}

	@When("user fills the Deal details")
	public void user_fills_the_Deal_details(DataTable table) {
		for (Map<String, String> data : table.asMaps()) {
			dp.enterTitle(data.get("Title"));
			dp.enterAmmount(data.get("Ammount"));
			dp.enterCommission(data.get("Commission"));
			//dp.selectStage(data.get("Stage"));
			dp.clickOnSaveBtn();
		}

	}

	@When("user clicks on save Btn")
	public void user_clicks_on_save_Btn() {
		//dp.clickOnSaveBtn();
	}

	@Then("a new deal is created")
	public void a_new_deal_is_created() {
	
	}

}
