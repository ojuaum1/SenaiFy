describe('Teste da tela de pesquisa', () => {
  before(() => {
    cy.visit('/');
  });

  it('Redirecionar a minha tela para a tela de busca', () => {
    cy.get("[href='/Search']").click();
    cy.scrollTo("top");
  });

  it('Procurar por uma musica', () => {
    cy.get("[data-testid='campoBusca']").type("samba de malandro");
    cy.get("[aria-label='music-item']").should("have.length.greaterThan", 0);
  });

  // it('Verificar se existe a musica exata', () => {
  //   cy.get("[aria-label='music-item']").contains(/^(Samba de Malandro)/i).should('exist');
  // });

  it("Clicou no botão curtir",  () => {
let searchText = "samba de malandro"

    const musicItem = cy.get('[aria-label="music-item"]').contains(new RegExp(`^(${searchText})$`, 'i')).closest('[aria-label="music-item"]');
    const buttonIcon = musicItem.find('[data-testid="icon-button"]');
   
    buttonIcon.click();
  });
});

