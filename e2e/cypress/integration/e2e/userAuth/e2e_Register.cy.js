/// <reference types="cypress" />
import '@shelex/cypress-allure-plugin';
import '../../../support/e2e_commands/user_auth/register_commands'
import testDescription from "./bdd-description/userAuth.description";
import register from "../../../support/e2e_commands/user_auth/register";

context("E2E - Register", { tag: "@register" }, () => {
    describe("Ao informar dados válidos", () => {
        
        it("Deve realizar cadastro com sucesso", () => {
            cy.allure().severity("blocker").startStep("test content").descriptionHtml(testDescription.registerUser);

            register.Cadastro();
        });
    });
}); 

