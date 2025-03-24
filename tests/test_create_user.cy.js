describe('PetStore API Tests', () => {
  const apiUrl = 'https://petstore.swagger.io/v2';
  it('Crear un usuario', () => {
      cy.fixture('user_data').then((user) => {
      cy.request('POST', `${apiUrl}/user`, user).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('message', user.id.toString());
      });
    });
  });
});