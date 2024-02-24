/// <reference types="cypress" />
import '@shelex/cypress-allure-plugin';
import '../../../support/e2e_commands/user_auth/register_Commands'
import testDescription from "./bdd-description/register.description";
import register from "../../../support/e2e_commands/user_auth/register";

context("E2E - REGISTER", { tag: "@register" }, () => {
    describe("Ao informar dados válidos", () => {
        
        it("Deve realizar cadastro com sucesso", () => {
            cy.allure().severity("blocker").startStep("test content").descriptionHtml(testDescription.registerUser);

            register.Cadastro();
        });
    });
}); 

