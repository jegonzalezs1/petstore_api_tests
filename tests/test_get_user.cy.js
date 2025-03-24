describe('PetStore API Tests', () => {
    const apiUrl = 'https://petstore.swagger.io/v2';
    it('Obtener información del usuario', () => {
        cy.request('GET', `${apiUrl}/user/juanperez`).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property('username', 'juanperez');
        });
    });
});



  

