@FunctionalTest
Feature: WebShop Login

@SmokeTest
Scenario Outline: WebShop Loging in

Given User is already on Login Page
When Title of Login page is WebShop Login
Then User Enters <Username> and <Password>
And clicks on Login button
And Demo Web Shop Title is displayed
And Browser is Closed


Examples:
     |Username                |Password     |
     |shettyash0902@gmail.com |Shetty       |
     
@SmokeTest @RegressionTest 
Scenario: Register using data table

Given User is on  Webshop page
When Title of the page is Demo Web Shop Register
Then User clicks on male Radio button 
And Enters Firstname, Lastname, Email, password and Confirm Password
          |Jeff  | Bezos |jeff0010@gmail.com|Amazon@123|Amazon@123|
And User clicks on Register button
And User is registered     
     