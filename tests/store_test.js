let registrationUser = {
    firstName: 'Oleg',
    lastName: '969594',
    telephone: '380998899998',
    password: 'fUxXF8vY7W3d',
};

Feature('store');

Scenario('Registration of user', ({ I, homePage, registerPage }) => {
    I.openStore();
    homePage.openRegistrationPage();
    registerPage.verifyRegistrationAccountText();
    registrationUser.email = Date.now() + '@test.com';
    registerPage.fillRegisxtrationDetails(registrationUser);
});
