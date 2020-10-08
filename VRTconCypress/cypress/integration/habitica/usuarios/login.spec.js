describe('Login', () => {
    
    beforeEach(() => {
        cy.visit('https://habitica.com/static/home')
    })

    it('Login exitoso', () => {
        cy.get('a[href="/login"]').click()
        cy.get('#usernameInput').type('plutarchia')
        cy.get('#passwordInput').type('password123')
        cy.get('button[type="submit"]').click()
        
    })

    it('Login falla por clave incorrecta', () => {
        cy.get('a[href="/login"]').click()
        cy.get('#usernameInput').type('plutarchia')
        cy.get('#passwordInput').type('wrongpassword')
        cy.get('button[type="submit"]').click()
        
        cy.get('.notifications').should('contain.text', 'your email address / username or password is incorrect')
    })

})