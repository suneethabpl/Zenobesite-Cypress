Feature: Zenobe apllication
test Zenobe application

Background:
Given the User visits to 'Zenobe' home page
When the User navigates to 'Our story' page

Scenario: test Our story page
Then the User should see 'Our story' page

Scenario: test String
Then the User validates the 'tonnes of CO 2 saved to date' to take screenshot

Scenario: test Picture
When the User click on 'James Basden' picture
Then the User should see 'James Basden'
And the User should see 'Tim Boothman'