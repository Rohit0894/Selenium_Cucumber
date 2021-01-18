Feature: Login Webshop using DataTable

Scenario: Register using data table

Given User is on  Webshop page
When Title of the page is Demo Web Shop Register
Then User clicks on male Radio button 
And Enters Firstname, Lastname, Email, password and Confirm Password
          |Jeff  | Bezos |jeff0010@gmail.com|Amazon@123|Amazon@123|
And User clicks on Register button
And User is registered