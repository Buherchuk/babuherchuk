const { I } = inject();

module.exports = {
  emailField: { css: '#input-email' },
  passwordField: { css: '#input-password' },
  // successRegistrationText: "Your Account Has Been Created!",
  registerButton: { xpath: '//input[@value="Login"]' },

  login(user) {
    I.fillField(this.emailField, user.email);
    I.fillField(this.passwordField, user.password);
    I.click(this.registerButton);
    I.say(user.email);
    I.say(user.password);
    // I.see(this.successRegistrationText, this.successRegistrationIdentify);
  }
}
