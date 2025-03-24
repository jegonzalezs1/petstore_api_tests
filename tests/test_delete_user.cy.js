describe('PetStore API Tests', () => {
    const apiUrl = 'https://petstore.swagger.io/v2';
    it('Eliminar un usuario', () => {
        cy.request('DELETE', `${apiUrl}/user/juanperez`).then((response) => {
          expect(response.status).to.eq(200);
        });
    });
});      