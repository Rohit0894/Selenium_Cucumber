Feature: WebShop Login

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
     |srilakshmi2020@gmail.com|Cucmber123$  |

