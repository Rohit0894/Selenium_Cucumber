$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/rohit.a.shetty/Accenture Eclipse Training/Cucumber/src/test/java/Feature/E2E.feature");
formatter.feature({
  "line": 2,
  "name": "WebShop Login",
  "description": "",
  "id": "webshop-login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@FunctionalTest"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "WebShop Loging in",
  "description": "",
  "id": "webshop-login;webshop-loging-in",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Title of Login page is WebShop Login",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User Enters \u003cUsername\u003e and \u003cPassword\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Demo Web Shop Title is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Browser is Closed",
  "keyword": "And "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "webshop-login;webshop-loging-in;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 16,
      "id": "webshop-login;webshop-loging-in;;1"
    },
    {
      "cells": [
        "shettyash0902@gmail.com",
        "Shetty"
      ],
      "line": 17,
      "id": "webshop-login;webshop-loging-in;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "WebShop Loging in",
  "description": "",
  "id": "webshop-login;webshop-loging-in;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@FunctionalTest"
    },
    {
      "line": 4,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Title of Login page is WebShop Login",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User Enters shettyash0902@gmail.com and Shetty",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Demo Web Shop Title is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Browser is Closed",
  "keyword": "And "
});
formatter.match({
  "location": "E2E.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 11168131100,
  "status": "passed"
});
formatter.match({
  "location": "E2E.title_of_Login_page_is_WebShop_Login()"
});
formatter.result({
  "duration": 644389000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shettyash0902@gmail.com",
      "offset": 12
    },
    {
      "val": "Shetty",
      "offset": 40
    }
  ],
  "location": "E2E.user_Enters_u(String,String)"
});
formatter.result({
  "duration": 186626500,
  "status": "passed"
});
formatter.match({
  "location": "E2E.clicks_on_Login_button()"
});
formatter.result({
  "duration": 1354241300,
  "status": "passed"
});
formatter.match({
  "location": "E2E.demo_Web_Shop_Title_is_displayed()"
});
formatter.result({
  "duration": 11269800,
  "status": "passed"
});
formatter.match({
  "location": "E2E.browser_is_Closed()"
});
formatter.result({
  "duration": 3947262100,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Register using data table",
  "description": "",
  "id": "webshop-login;register-using-data-table",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@SmokeTest"
    },
    {
      "line": 19,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "User is on  Webshop page",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "Title of the page is Demo Web Shop Register",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "User clicks on male Radio button",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Enters Firstname, Lastname, Email, password and Confirm Password",
  "rows": [
    {
      "cells": [
        "Jeff",
        "Bezos",
        "jeff0010@gmail.com",
        "Amazon@123",
        "Amazon@123"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User clicks on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User is registered",
  "keyword": "And "
});
formatter.match({
  "location": "E2E.user_is_on_webshop_page()"
});
formatter.result({
  "duration": 10888717800,
  "status": "passed"
});
formatter.match({
  "location": "E2E.title_of_the_page_is_demo_web_shop_register()"
});
formatter.result({
  "duration": 616351700,
  "status": "passed"
});
formatter.match({
  "location": "E2E.user_clicks_on_male_Radio_button()"
});
formatter.result({
  "duration": 66827500,
  "status": "passed"
});
formatter.match({
  "location": "E2E.enters_firstname_lastname_email_password_and_confirm_password(DataTable)"
});
formatter.result({
  "duration": 504139600,
  "status": "passed"
});
formatter.match({
  "location": "E2E.user_clicks_on_register_button()"
});
formatter.result({
  "duration": 1017835400,
  "status": "passed"
});
formatter.match({
  "location": "E2E.user_is_registered()"
});
formatter.result({
  "duration": 60851000,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[contains(text(),\u0027Your registration completed\u0027)]\"}\n  (Session info: chrome\u003d87.0.4280.141)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027P4ALAP-9388TCH\u0027, ip: \u0027192.168.29.182\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.4\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d87.0.4280.88 (89e2380a3e36c3464b5dd1302349b1382549290d-refs/branch-heads/4280@{#1761}), userDataDir\u003dC:\\Users\\ROHITA~1.SHE\\AppData\\Local\\Temp\\scoped_dir25656_1437894555}, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dXP, proxy\u003dProxy(), goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:54755}, acceptInsecureCerts\u003dfalse, browserVersion\u003d87.0.4280.141, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 5c56ab46fe890588bfadd2c6d04a8cee\n*** Element info: {Using\u003dxpath, value\u003d//div[contains(text(),\u0027Your registration completed\u0027)]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\r\n\tat StepDefinition.E2E.user_is_registered(E2E.java:110)\r\n\tat ✽.And User is registered(/Users/rohit.a.shetty/Accenture Eclipse Training/Cucumber/src/test/java/Feature/E2E.feature:28)\r\n",
  "status": "failed"
});
});