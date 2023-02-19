///<reference types="cypress"/>
import { Given } from 'cypress-cucumber-preprocessor/steps'
import homepage from '../BDDMagento/pageObjects/homepage'
Given("the User visits to {string} page", () => {
    homepage.visitToHome();
})