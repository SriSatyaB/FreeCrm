$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/calendar_sample.feature");
formatter.feature({
  "name": "To test the calendar module",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@FunctionalTest"
    }
  ]
});
formatter.background({
  "name": "To login to the app",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user opens the url",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepDefinitions.Calendars_Sample.user_opens_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks login btn",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.Calendars_Sample.user_clicks_login_btn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters username and password",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.Calendars_Sample.enters_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click submit btn",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.Calendars_Sample.click_submit_btn()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To add one or more new calendars",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FunctionalTest"
    },
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "user logged in the crm application",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepDefinitions.Calendars_Sample.user_logged_in_the_crm_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user opens calendar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinitions.Calendars_Sample.user_opens_calendar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks new calendar",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepDefinitions.Calendars_Sample.user_clicks_new_calendar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user fills the form with",
  "rows": [
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "com.stepDefinitions.Calendars_Sample.user_fills_the_form_with(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on save btn",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepDefinitions.Calendars_Sample.click_on_save_btn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "new calendar event should be saved",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.Calendars_Sample.new_calendar_event_should_be_saved()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logouts from the application",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.Calendars_Sample.user_logouts_from_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "To login to the app",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user opens the url",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepDefinitions.Calendars_Sample.user_opens_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks login btn",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.Calendars_Sample.user_clicks_login_btn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters username and password",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.Calendars_Sample.enters_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click submit btn",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.Calendars_Sample.click_submit_btn()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To delete a calendar event",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FunctionalTest"
    },
    {
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "name": "user is logged in to the application",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepDefinitions.Calendars_Sample.user_is_logged_in_to_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on a Date",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinitions.Calendars_Sample.user_click_on_a_Date()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the events created on that date should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.Calendars_Sample.the_events_created_on_that_date_should_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on an event",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinitions.Calendars_Sample.user_clicks_on_an_event()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "event details are displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.Calendars_Sample.event_details_are_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user cliks on delete button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.Calendars_Sample.user_cliks_on_delete_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Features/crm_login.feature");
formatter.feature({
  "name": "To test the crm application Login",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@FunctionalTest"
    }
  ]
});
formatter.scenarioOutline({
  "name": "To test the crm Login Functionality for Valid User",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "user enters the url",
  "keyword": "Given "
});
formatter.step({
  "name": "user clicks on the login button",
  "keyword": "Then "
});
formatter.step({
  "name": "user enters \"\u003cemail\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks on the submit button",
  "keyword": "Then "
});
formatter.step({
  "name": "user should be launched on the home page",
  "keyword": "Then "
});
formatter.step({
  "name": "user verify the username",
  "keyword": "Then "
});
formatter.step({
  "name": "logout from the application",
  "keyword": "Then "
});
formatter.step({
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "pdeep.nov20@mail.com",
        "Satya@123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To test the crm Login Functionality for Valid User",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FunctionalTest"
    },
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user enters the url",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepDefinitions.Crm_LoginSteps.user_enters_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the login button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.Crm_LoginSteps.user_clicks_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"pdeep.nov20@mail.com\" and \"Satya@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinitions.Crm_LoginSteps.user_enters_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.Crm_LoginSteps.user_clicks_on_the_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be launched on the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.Crm_LoginSteps.user_should_be_launched_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verify the username",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.Crm_LoginSteps.user_verify_the_username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "logout from the application",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.Crm_LoginSteps.logout_from_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.Crm_LoginSteps.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "To test the crm Login Functionality for InValid User",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "name": "user enters the url",
  "keyword": "Given "
});
formatter.step({
  "name": "user clicks on the login button",
  "keyword": "Then "
});
formatter.step({
  "name": "user enters invalid \"\u003cemail\u003e\" and invalid \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks on the submit button",
  "keyword": "Then "
});
formatter.step({
  "name": "invalid credentials message is displayed",
  "keyword": "Then "
});
formatter.step({
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "sri@gmail.com",
        "Sri123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To test the crm Login Functionality for InValid User",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FunctionalTest"
    },
    {
      "name": "@RegressionTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user enters the url",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepDefinitions.Crm_LoginSteps.user_enters_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the login button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.Crm_LoginSteps.user_clicks_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters invalid \"sri@gmail.com\" and invalid \"Sri123\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinitions.Crm_LoginSteps.user_enters_invalid_and_invalid(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.Crm_LoginSteps.user_clicks_on_the_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "invalid credentials message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.Crm_LoginSteps.invalid_credentials_message_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.Crm_LoginSteps.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});