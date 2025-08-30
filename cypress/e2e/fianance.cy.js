describe('Funcionalidade de Acesso', () => {
  beforeEach(() => {
    cy.visit('https://devfinance-agilizei.netlify.app/#') 
  })

  it('Deve validar titulo da página presente', () => {
    cy.get('img')
    .should('have.attr','alt',"Logo Dev Finance")

  })
});
