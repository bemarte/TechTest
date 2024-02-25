/// <reference types="cypress" />
import '@shelex/cypress-allure-plugin';
import testDescription from "./bdd-description/userAuth.description";
import Login from "../../../support/e2e_commands/login/login";

context("E2E - Login", { tag: "@login" }, () => {
    describe("Ao informar dados válidos", () => {
        
        it("Deve realizar login com sucesso", () => {
            cy.allure().severity("blocker").startStep("test content").descriptionHtml(testDescription.loginUser);

            Login.CadastroOK();
        });
    });
}); 

