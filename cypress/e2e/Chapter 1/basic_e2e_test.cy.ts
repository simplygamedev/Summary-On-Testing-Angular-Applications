describe('Contacts App title test', () => {

  it('Title should be correct', () => {

    const appUrl = 'http://localhost:4200';
    const expectedTitle = 'SummaryOnTestingAngularApplications';

    cy.visit(appUrl);
    cy.title().should('eq', expectedTitle);

  });

});
