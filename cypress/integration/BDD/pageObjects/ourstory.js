class OurStoryPage {
    tonnes(co2count) {
        let value1, value2
        cy.get('div#tco2-count div h2')
            .should(($el) => {
                value1 = $el.text();
            })

        cy.get('div#tco2-count div h2')
            .should(($div) => {
                value2 = $div.text();
                expect(value1).not.equal(value2);
            })

        const h2 =
            cy.get('div#tco2-count')
            .find('div h2');
        cy.screenshot('our page');
        cy.contains('Okay').click()
        h2.screenshot(co2count)

    }

    picture() {
        cy.get('.team_member_grid_icons > :nth-child(1)').eq(0)
            .scrollIntoView()
            .click();
    }

    popup(founder) {
        cy.get('section[data-id="559022b1"]')
            .contains(founder)
            .should('be.visible')
            .should('have.text', 'Tim Boothman')
    }
}
const ourstorypage = new OurStoryPage();

export default ourstorypage;