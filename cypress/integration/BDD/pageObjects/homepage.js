class HomePage {
    visitToHome(home) {
        cy.visit(Cypress.env('baseUrl'));
        cy.title().should('include', 'Zenobe');
    }

    navigaeToOurstory(page) {
        cy.get('a.elementor-icon')
            .click();
        cy.get('a[id="about-us"]')
            .click({ force: true });
        cy.get('li#menu-item-about-us')
            .find('ul li a')
            .contains(page)
            .click();
    }

    verifyOurStoryPage(pagetitle) {
        cy.visit(Cypress.env('baseUrl') + "/our-story/");
        cy.url(pagetitle).should('include', 'our-story');
    }

}

const homepage = new HomePage();

export default homepage;