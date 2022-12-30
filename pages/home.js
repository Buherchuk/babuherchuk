const { I } = inject();

module.exports = {
  myAccountSpoiler: { xpath: '//*[@id="top-links"]/ul/li/span/span' },
  registerLink: { xpath: '//a[.="Register"]' },
  registerTextLocator: { xpath: '//*[@id="content"]/h1' },
  registrationPageText: 'Register Account',


  openRegistrationPage() {
    I.click(this.myAccountSpoiler);
    I.click(this.registerLink);
    I.see(this.registrationPageText, this.registerTextLocator);
  }
}
