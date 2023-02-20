class OurStoryPage {
    tonnes(co2count) {
        const h2 = cy.get('div#tco2-count')
            .find('div h2')
        cy.contains('Okay').click()
        cy.screenshot();
        h2.screenshot(co2count);
    }

    picture() {
        cy.get('.team_member_grid_icons > :nth-child(1)').eq(0)
            .scrollIntoView()
            .click();
    }

    popup(founder) {
        cy.get('section[data-id="559022b1"]')
            .contains(founder)
            .should('be.visible');
    }

}
const ourstorypage = new OurStoryPage();

export default ourstorypage;