Cypress.Commands.add('fillFakeEmail', (selector) => {
    const generateRandomString = (length) => {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let result = '';
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return result;
    };
  
    const randomString = generateRandomString(8);
    const fakeEmail = `${randomString}@randomemail.com`;
  
    cy.get(selector).type(fakeEmail);
  });