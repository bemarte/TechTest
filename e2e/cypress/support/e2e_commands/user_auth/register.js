import { selector } from "./selectors";
import './register_Commands'

class Register{
    Cadastro(){
        cy.visit('/');
        cy.contains('Signup / Login').should('exist').should('be.visible');
        cy.get(selector.btnSignup).click()
        cy.url().should('contains', 'https://automationexercise.com/login');
        cy.get(selector.inputName).type('TESTE CYPRESS');
        cy.fillFakeEmail(selector.inputEmail) //command preenchimento de email fake
        cy.get('[data-qa="signup-button"]').click();
        cy.url().should('contains', 'https://automationexercise.com/signup');
        cy.get('#id_gender1').click();
        cy.get('#password').click().type('123456789');
        cy.get('[data-qa="days"]').select('1');
        cy.get('[data-qa="months"]').select('1');
        cy.get('[data-qa="years"]').select('1990');
        cy.get('#newsletter').click();
        cy.get('#optin').click();
        cy.get('#first_name').type('cypress');
        cy.get('#last_name').type('teste');
        cy.scrollTo(0, 750)
        cy.get('#company').type('cypress');
        cy.get('#address1').type('rua cypress');
        cy.get('#state').type('estado cypress');
        cy.get('#city').type('cidade cpress');
        cy.get('#zipcode').type('6000000');
        cy.get('#mobile_number').type('123456789');
        cy.get('[data-qa="create-account"]').click();
        cy.url().should('contains', 'https://automationexercise.com/account_created');
        cy.url().should('contains', 'https://automationexercise.com/');
        cy.contains('Congratulations! Your new account has been successfully created!').should('be.visible');
    }
}

export default new Register();
