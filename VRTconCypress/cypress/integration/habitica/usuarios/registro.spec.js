describe('Registro', () => {
    
    beforeEach(() => {
        cy.visit('https://habitica.com/static/home')
    })

    it('Registrar nuevo usuario si no existe previamente', () => {
        cy.get('#usernameInput').type('plutarchia')
        cy.get('input[type="email"]').type('plutarchia@taikz.com')
        cy.get('input[type="password"]').first().type('password123')
        cy.get('input[type="password"]').last().type('password123')
        cy.get('button[type="submit"]').click()

        cy.get('#avatar-modal___BV_modal_body_').find('h3').should('contain', 'Bienvenido a')
        
    })

    it('No registrar nuevo usuario si existe previamente', () => {
        cy.get('#usernameInput').type('plutarchia')
        cy.get('input[type="email"]').type('plutarchia@taikz.com')
        cy.get('input[type="password"]').first().type('password123')
        cy.get('input[type="password"]').last().type('password123')
        cy.get('button[type="submit"]').should('be.disabled')
        
    })

})