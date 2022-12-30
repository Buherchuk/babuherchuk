const { openSignInPage } = require("../pages/signin");
const signin = require("../pages/signin");

let registrationUser = {
    firstName: 'Oleg',
    lastName: '969594',
    telephone: '380998899998',
    password: 'fUxXF8vY7W3d',
};

Feature('registration');

Before(({ I }) => {
    I.openStore();
  });

Scenario('Registration of user', ({ I, homePage, registerPage }) => {    
    homePage.openRegistrationPage();
    registrationUser.email = Date.now() + '@test.com';
    registerPage.fillRegisxtrationDetails(registrationUser);
}).tag("registration");

