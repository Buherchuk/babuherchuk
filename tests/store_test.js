let registrationUser = {
    firstName: 'Oleg',
    lastName: 'Olegovych',
    telephone: '380998899998',
    password: 'fUxXF8vY7W3d',
};

Feature('store');

Scenario('Registration if user', ({ I, homePage, registerPage }) => {
    I.openStore();
    homePage.openRegistrationPage();
    registerPage.verifyRegistrationAccountText();
    registrationUser.email = Date.now() + '@test.com';
    registerPage.fillRegisxtrationDetails(registrationUser);
});
