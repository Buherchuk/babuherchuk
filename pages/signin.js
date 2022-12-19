const { I } = inject();

module.exports = {
  signInLink: { xpath: '//a[text()="Sign In"]' },
  newCustomerText: { xpath: '//h2[text()="New Customer"]' },
  returningCustomerText: { xpath: '//h2[text()="Returning Customer"]' },
  
  openSignInPage() {
    I.click(this.signInLink);
    // I.see(this.newCustomerText);
    // I.see(this.newCustreturningCustomerTextomerText);
  }
}
