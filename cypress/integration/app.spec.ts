describe('App', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should redirect to "about" route', () => {
    cy.url().should('include', 'about');
  });

  it('should display current year in the footer', () => {
    cy
      .get('[data-testid=footer-year]')
      .should('contain', new Date().getFullYear().toString());
  });

  it('should have "Clienti", "Prodotti" menus', () => {
    cy.get('mat-toolbar button.nav-button').should(navItems => {
      expect(navItems).to.have.length(2);
      expect(navItems.eq(0)).to.contain('Clienti');
      expect(navItems.eq(1)).to.contain('Prodotti');
    });
  });
});
