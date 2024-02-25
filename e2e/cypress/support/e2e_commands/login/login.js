import { selector } from "./selectors";

class Login{
    CadastroOK(){
        cy.visit('/');
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.get('.login-form input:nth-child(2)').type('testcypress2024@gmail.com');
        cy.get('.login-form input:nth-child(3)').type('123456');
        cy.get('.login-form .btn').click();
        cy.url().should('contains', 'https://automationexercise.com/');
        cy.contains('Logout').should('be.visible');
        cy.contains('Delete Account').should('be.visible');

    }
}

export default new Login();