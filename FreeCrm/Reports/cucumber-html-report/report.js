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
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created\nfrom timeout: Timed out receiving message from renderer: 600.000\n  (Session info: chrome\u003d87.0.4280.88)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027PRADEEP-PC\u0027, ip: \u0027192.168.214.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_271\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x00B4C0C3+3326147]\n\tOrdinal0 [0x00A30851+2164817]\n\tOrdinal0 [0x008B7298+619160]\n\tOrdinal0 [0x008AB17F+569727]\n\tOrdinal0 [0x008AA421+566305]\n\tOrdinal0 [0x008AA815+567317]\n\tOrdinal0 [0x008AA135+565557]\n\tOrdinal0 [0x008B38B1+604337]\n\tOrdinal0 [0x008AA0F1+565489]\n\tOrdinal0 [0x008AAEA2+568994]\n\tOrdinal0 [0x008AA421+566305]\n\tOrdinal0 [0x008AA815+567317]\n\tOrdinal0 [0x008AA135+565557]\n\tOrdinal0 [0x008B1D2C+597292]\n\tOrdinal0 [0x008AA0F1+565489]\n\tOrdinal0 [0x008AAEA2+568994]\n\tOrdinal0 [0x008AA421+566305]\n\tOrdinal0 [0x008AA815+567317]\n\tOrdinal0 [0x008AA135+565557]\n\tOrdinal0 [0x008AFE62+589410]\n\tOrdinal0 [0x008AA0F1+565489]\n\tOrdinal0 [0x008AAEA2+568994]\n\tOrdinal0 [0x008AA421+566305]\n\tOrdinal0 [0x008AA815+567317]\n\tOrdinal0 [0x008AA135+565557]\n\tOrdinal0 [0x008AF075+585845]\n\tOrdinal0 [0x008AA0F1+565489]\n\tOrdinal0 [0x008AAEA2+568994]\n\tOrdinal0 [0x008AA421+566305]\n\tOrdinal0 [0x008AA815+567317]\n\tOrdinal0 [0x008AA135+565557]\n\tOrdinal0 [0x008A6776+550774]\n\tOrdinal0 [0x008AA0F1+565489]\n\tOrdinal0 [0x008A9F13+565011]\n\tOrdinal0 [0x008A9D07+564487]\n\tOrdinal0 [0x008B82C0+623296]\n\tOrdinal0 [0x00856BDD+224221]\n\tOrdinal0 [0x00855CAC+220332]\n\tOrdinal0 [0x0085189B+202907]\n\tOrdinal0 [0x00833DF4+81396]\n\tOrdinal0 [0x00834DEE+85486]\n\tOrdinal0 [0x00834D79+85369]\n\tOrdinal0 [0x00A485DC+2262492]\n\tGetHandleVerifier [0x00CD2874+1487204]\n\tGetHandleVerifier [0x00CD23CD+1486013]\n\tGetHandleVerifier [0x00CDA368+1518680]\n\tGetHandleVerifier [0x00CD2F4E+1488958]\n\tOrdinal0 [0x00A3ED0D+2223373]\n\tOrdinal0 [0x00A4A12B+2269483]\n\tOrdinal0 [0x00A4A26F+2269807]\n\tOrdinal0 [0x00A5ECB8+2354360]\n\tBaseThreadInitThunk [0x75C6FA29+25]\n\tRtlGetAppContainerNamedObjectPath [0x77A575F4+228]\n\tRtlGetAppContainerNamedObjectPath [0x77A575C4+180]\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:499)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:486)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:472)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat com.baseClasses.Library.browserSetUp(Library.java:53)\r\n\tat com.stepDefinitions.Hook.setUp(Hook.java:27)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user enters the url",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepDefinitions.Crm_LoginSteps.user_enters_the_url()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on the login button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.Crm_LoginSteps.user_clicks_on_the_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters invalid \"sri@gmail.com\" and invalid \"Sri123\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinitions.Crm_LoginSteps.user_enters_invalid_and_invalid(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on the submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.Crm_LoginSteps.user_clicks_on_the_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "invalid credentials message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.Crm_LoginSteps.invalid_credentials_message_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.Crm_LoginSteps.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027PRADEEP-PC\u0027, ip: \u0027192.168.214.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_271\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:125)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:295)\r\n\tat com.reusableFunctions.SeleniumUtilities.to_take_screenshot(SeleniumUtilities.java:26)\r\n\tat com.stepDefinitions.Hook.tear(Hook.java:40)\r\n",
  "status": "failed"
});
formatter.uri("file:src/test/resources/Features/deals.feature");
formatter.feature({
  "name": "To test the deals module",
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
  "name": "To create a new Deal",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FunctionalTest"
    }
  ]
});
formatter.step({
  "name": "user is on the homePage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepDefinitions.Crm_DealsSteps.user_is_on_the_homePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the New Btn",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinitions.Crm_DealsSteps.user_clicks_on_the_New_Btn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user fills the Deal details",
  "rows": [
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "com.stepDefinitions.Crm_DealsSteps.user_fills_the_Deal_details(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on save Btn",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepDefinitions.Crm_DealsSteps.user_clicks_on_save_Btn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a new deal is created",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.Crm_DealsSteps.a_new_deal_is_created()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});