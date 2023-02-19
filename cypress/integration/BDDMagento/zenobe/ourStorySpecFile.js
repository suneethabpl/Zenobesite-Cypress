///<reference types="cypress"/>
import { When, Then } from 'cypress-cucumber-preprocessor/steps'
import homepage from '../pageObjects/homepage';
import ourstorypage from '../pageObjects/ourstory'

When("the User navigates to {string} page", () => {
    homepage.navigaeToOurstory();
})

Then("the User should see {string} page", () => {
    homepage.verifyOurStoryPage();
})

When('the User validates the {string}', () => {
    ourstorypage.tonnes();
})

When('the User click on {string} picture', () => {
    ourstorypage.picture();
})
Then('the User should see {string}', () => {
    ourstorypage.popup();
})
Then('the user should see {string}', () => {
    ourstorypage.inValid();
})