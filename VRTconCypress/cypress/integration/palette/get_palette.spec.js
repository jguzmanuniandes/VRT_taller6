describe('Get Palette screenshoots', () => {

    beforeEach(() => {
        cy.visit('http://paletadecolores.s3-website-us-east-1.amazonaws.com/')
    })

    it('Obtener primer screenshot', () => {
        cy.get('#generate_palette').click()
        cy.screenshot('imagen1')
    })

    it('Obtener segundo screenshot', () => {
        cy.get('#generate_palette').click()
        cy.screenshot('imagen2')
    })

})