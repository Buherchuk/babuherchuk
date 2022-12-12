let registrationUser = {
    firstName: 'Oleg',
    lastName: 'Olegovych',
    telephone: '380998899998',
    password: 'fUxXF8vY7W3d',
};

Feature('store');

Scenario('test something', ({ I, homePage, registerPage }) => {
    I.openStore();
    homePage.openRegistrationPage();
    registerPage.verifyRegisterAccountText();
    registrationUser.email = Date.now() + '@test.com';
    registerPage.fillRegisxtrationDetails(registrationUser);
    pause();
});
