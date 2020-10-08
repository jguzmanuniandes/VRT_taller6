describe('Logout', () => {
    
    beforeEach(() => {
        cy.visit('https://habitica.com/static/home')
    })

    it('Hacer logout cuando el usuario está autenticado', () => {
        cy.get('a[href="/login"]').click()
        cy.get('#usernameInput').type('plutarchia')
        cy.get('#passwordInput').type('password123')
        cy.get('button[type="submit"]').click()

        cy.get('.item-user').first().click({force:true})
        cy.contains('Cerrar sesión').click({force:true})

        cy.url().should('eq', 'https://habitica.com/static/home')
        
    })

})