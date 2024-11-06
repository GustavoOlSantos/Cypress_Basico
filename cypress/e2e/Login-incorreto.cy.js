describe('Página de Login', () => {

    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app');
        cy.get('[data-test="login-button"]').click();

        cy.intercept('POST', 'https://adopet-api-i8qu.onrender.com/adotante/login',{
          statusCode: 400, }).as('stubPost');
    })

    it('Deve preencher os campos do formulário incorretamente para logar um usuário', () => {

      cy.login("anaananan@email.com", 'senha123');
      
      //cy.contains("Por favor, verifique o email digitado").should("be.visible");
      cy.contains("A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres").should("be.visible");
    })

    it('Verifica mensagem de falha no login', () => {
      cy.login("anaananana@email.com", 'Senha123');
      cy.wait('@stubPost');
      cy.contains('Falha no login. Consulte suas credenciais.').should('be.visible');
    })

})
