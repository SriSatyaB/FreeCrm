@FunctionalTest
Feature: To test the deals module 
Background: To login to the app 
	Given user opens the url 
	Then user clicks login btn 
	Then enters username and password 
	Then click submit btn 
	
Scenario: To create a new Deal 
	Given user is on the homePage 
	When user clicks on the New Btn 
	And user fills the Deal details 
	|Title|Ammount|Commission|Stage|
	|TestDeal1|4000|200|Negotiate|
	And user clicks on save Btn 
	Then a new deal is created 
	
