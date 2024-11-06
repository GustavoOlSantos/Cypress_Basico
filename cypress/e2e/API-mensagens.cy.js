describe('API adopet', () => {

    it('Mensagens da API', () => {
        cy.request({
            method: 'GET' ,
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/52ab0967-fff9-4157-8f10-5db94fe027ca' ,
            headers: Cypress.env()
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg')
        })
    })
})