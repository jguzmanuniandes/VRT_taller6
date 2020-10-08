describe('Crear Tarea', () => {
    
    before(() => {
        cy.visit('https://habitica.com/static/home')
        cy.get('a[href="/login"]').click()
        cy.get('#usernameInput').type('plutarchia')
        cy.get('#passwordInput').type('password123')
        cy.get('button[type="submit"]').click()
    })

    it('Crear hábito', () => {
        cy.get('.create-btn').click()
        cy.get('.create-task-btn').eq(0).click()

        cy.get('input[placeholder="Add a title"]').type('Hábito 1')
        cy.get('textarea[placeholder="Add notes"]').type('Nota 1')
        cy.contains('Crear').first().click()

        cy.get('.habit').contains('Hábito 1').should('be.visible')
    })

    it('Crear diaria', () => {
        cy.get('.create-btn').click()
        cy.get('.create-task-btn').eq(1).click()

        cy.get('input[placeholder="Add a title"]').type('Diario 2')
        cy.get('textarea[placeholder="Add notes"]').type('Nota 2')
        cy.contains('Crear').first().click()

        cy.get('.daily').contains('Diario 2').should('be.visible')
    })

    it('Crear pendiente', () => {
        cy.get('.create-btn').click()
        cy.get('.create-task-btn').eq(2).click()

        cy.get('input[placeholder="Add a title"]').type('Pendientes 3')
        cy.get('textarea[placeholder="Add notes"]').type('Nota 3')
        cy.contains('Crear').first().click()

        cy.get('.todo').contains('Pendientes 3').should('be.visible')
    })

    it('Crear recompensa', () => {
        cy.get('.create-btn').click()
        cy.get('.create-task-btn').eq(3).click()

        cy.get('input[placeholder="Add a title"]').type('Recompensa 4')
        cy.get('textarea[placeholder="Add notes"]').type('Nota 4')
        cy.contains('Crear').first().click()

        cy.get('.reward').contains('Recompensa 4').should('be.visible')
    })

    after(() => {
        cy.get('.item-user').first().click({force:true})
        cy.contains('Cerrar sesión').click({force:true})
    })

})