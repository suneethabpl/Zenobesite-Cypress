///<reference types="cypress"/>
import { When, Then } from 'cypress-cucumber-preprocessor/steps'
import homepage from '../pageObjects/homepage';
import ourstorypage from '../pageObjects/ourstory'

Then("the User should see {string} page", (pagetitle) => {
    homepage.verifyOurStoryPage(pagetitle);
})

When('the User validates the {string} to take screenshot', (co2count) => {
    ourstorypage.tonnes(co2count);
})

When('the User click on {string} picture', (founder) => {
    ourstorypage.picture(founder);
})

Then('the User should see {string}', (founder) => {
    ourstorypage.popup(founder);
})