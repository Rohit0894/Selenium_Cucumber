Feature: WebShop Registration

Scenario: User Registration

Given User has launched Googlechrome
When User reaches Webshop page
Then User clicks on register 
And  Webshop Register page is opened


Scenario Outline: User Details

Given User is on Registration page
When User enters <FirstName> and <LastName>
And Enters <mailid> <Password> and <Confirm_Password>
Then User clicks on Register and User gets registered

Examples:
    |FirstName  |LastName    |mailid                  |Password     |Confirm_Password| 
    |  Sri      |Lakshmi     |srilakshmi2020@gmail.com|Cucmber123$  |Cucmber123$  |
 