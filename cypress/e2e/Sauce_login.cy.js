/// <reference types="Cypress" />


describe('Test Web Saucedemo', () => {
  it('Test de Login y Logout ', () => {
    cy.visit('https://www.saucedemo.com')
   //ingresar el usuario y la clave
   cy.get('#user-name').type(Cypress.env('USERNAME'))
   cy.get('#password').type(Cypress.env('PASSWORD'))
 
   //click en el botón Ingresar
   cy.get('#login-button').click()

   //Validar que el login fue exitoso
   cy.url().should('include', '/inventory.html'); //verifica que la URL cambio

   //Click en el botón Menú hamburguesa
   cy.get('#react-burger-menu-btn').click()
   
   //Botón Logout del Menú
   cy.get('#logout_sidebar_link').click()

   //Verificar que el logout fue exitoso
   cy.url().should('include', '/'); //verificar que regresamos a la web de login
  })
})