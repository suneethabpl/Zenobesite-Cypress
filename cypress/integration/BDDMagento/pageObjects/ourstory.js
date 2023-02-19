class OurStoryPage {
    tonnes() {
        const h2 = cy.get('div#tco2-count')
            .find('div h2')
            .invoke('show')
            .should('exist')
        cy.contains('Okay').click()
        cy.wait(5000)
        cy.screenshot('Our page');
    }
    picture() {
        cy.get('.team_member_grid_icons > :nth-child(1)').eq(0)
            .scrollIntoView()
            .click();
    }
    popup() {
        cy.get('section[data-id="559022b1"]')
            .contains('James Basden')
            .should('be.visible');
    }
    inValid() {
        cy.get('section[data-id="559022b1"]')
            .should('have.text', 'Tim Boothman')
            .should('be.visible');
        cy.wait(4000);
        cy.screenshot('failed test');
    }

}
const ourstorypage = new OurStoryPage();

export default ourstorypage;