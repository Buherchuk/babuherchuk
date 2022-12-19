const { I } = inject();

module.exports = {
  navigationDogs: { xpath: '//span[text()="Dogs"]' },
  

  buyDogsProduct() {
    I.click(this.navigationDogs);
  }
}
