const { openSignInPage } = require("../pages/signin");
const signin = require("../pages/signin");

let registrationUser = {
    firstName: 'Oleg',
    lastName: '969594',
    telephone: '380998899998',
    email: '1671394245194@test.com',
    password: 'fUxXF8vY7W3d',


};

Feature('store');

Scenario('Registration of user', ({ I, homePage, registerPage }) => {
    I.openStore();
    homePage.openRegistrationPage();
    registerPage.verifyRegistrationAccountText();
    registrationUser.email = Date.now() + '@test.com';
    registerPage.fillRegisxtrationDetails(registrationUser);
}).tag("segistration");

Scenario('login', async ({ I, signinPage, buyPage }) => {
    I.openStore();
    signinPage.openSignInPage();
    buyPage.login(registrationUser);
}).tag("login");

Scenario('Sign in user', ({ I, signinPage, buyPage }) => {
    I.openStore();
    signinPage.openSignInPage();
    buyPage.login(registrationUser, registrationUser);
}).tag("signin");