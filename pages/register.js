const { I } = inject();

module.exports = {
  registerHeaderText: 'Register Account',
  firstNameField: { css: '#input-firstname' },
  lastNameField: { css: '#input-lastname' },
  emailField: { css: '#input-email' },
  telephoneField: { css: '#input-telephone' },
  passwordField: { css: '#input-password' },
  passwordConfirmField: { css: '#input-confirm' },
  agreeCheckbox: { xpath: '//input[@name="agree"]'},
  registerButton: { xpath: '//*[@id="content"]/form/div/div/input[2]'},
  successRegistrationText: { css: '#content > h1'},

  verifyRegistrationAccountText() {
    I.see(this.registerHeaderText);
  },

  fillRegisxtrationDetails(user) {
    I.fillField(this.firstNameField, user.firstName);
    I.fillField(this.lastNameField, user.lastName);
    I.fillField(this.emailField, user.email);
    I.fillField(this.telephoneField, user.telephone);
    I.fillField(this.passwordField, user.password);
    I.fillField(this.passwordConfirmField, user.password);
    I.checkOption(this.agreeCheckbox);
    I.click(this.registerButton);
    I.grabTextFrom(this.successRegistrationText);
  }
}
