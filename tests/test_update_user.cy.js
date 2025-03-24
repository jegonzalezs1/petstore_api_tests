describe('PetStore API Tests', () => {
    const apiUrl = 'https://petstore.swagger.io/v2';
    it('Actualizar un usuario', () => {
        const updatedUser = {
          "id": 101,
          "username": "juanperez",
          "firstName": "Juan Jose",
          "lastName": "Perez Alvarez",
          "email": "juan.perez@example.com",
          "password": "1234",
          "phone": "0979580981",
          "userStatus": 1
      }
    
        cy.request('PUT', `${apiUrl}/user/juanperez`, updatedUser).then((response) => {
          expect(response.status).to.eq(200);
        });
    });
});