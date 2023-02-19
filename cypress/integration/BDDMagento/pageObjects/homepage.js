class HomePage {
    visitToHome() {
        cy.visit(Cypress.env('baseUrl'));
    }

    navigaeToOurstory() {
        cy.get('a.elementor-icon')
            .click();
        cy.wait(4000)
        cy.get('a[id="about-us"]')
            .click({ force: true });
        cy.wait(6000)
        cy.get('li#menu-item-about-us')
            .find('ul li a')
            .contains('Our story')
            .click();
    }

    verifyOurStoryPage() {
        cy.visit(Cypress.env('baseUrl') + "/our-story/");
        cy.url().should('include', 'our-story');
    }

}

const homepage = new HomePage();

export default homepage;