describe('Funcionalidade de Acesso', () => {
    beforeEach(()=>{
    cy.visit('https://devfinance-agilizei.netlify.app/#')
    });    
 
  it('Deve validar titulo da página presente', () => {
    cy.get('img')
    .should('have.attr','alt',"Logo Dev Finance")
  });
  it("Deve Criar uma nova Transação mas Cancelar",()=>{
    cy.get('.button')
    .contains('Nova Transação')
    .click();
    cy.get('#description')
    .type('Almocin dos Cria')
    cy.get('#amount')
    .type(129)
    cy.get('#date')
    .type('2023-09-09')
    cy.get('a')
    .contains('Cancelar').click();    
  });

   it("Deve Criar uma nova Transação e Salvar",()=>{
    cy.get('.button')
    .contains('Nova Transação')
    .click();
    cy.get('#description')
    .type('Almocin dos Cria')
    cy.get('#amount')
    .type(129)
    cy.get('#date')
    .type('2023-09-09')
    cy.get('button')
    .contains('Salvar')
    .click();
  });
});
