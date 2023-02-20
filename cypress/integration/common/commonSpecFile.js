///<reference types="cypress"/>
import { Given } from 'cypress-cucumber-preprocessor/steps'
import homepage from '../BDD/pageObjects/homepage'
Given("the User visits to {string} page", (home) => {
    homepage.visitToHome(home);
})

When("the User navigates to {string} page", (page) => {
    homepage.navigaeToOurstory(page);
})