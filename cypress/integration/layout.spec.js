context('Layout', () => {
    beforeEach(() => {
        cy.visit('localhost:4200')
    });

    describe('first test', () => {
        it('should show h1 saying sprout', () => {
            cy.screenshot();
            cy.get('h1').contains('Sprout')
        })
    })
})