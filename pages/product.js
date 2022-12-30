const { I } = inject();

module.exports = {
  buyProductLink: 'http://opencart.qatestlab.net/index.php?route=product/product&path=31&product_id=50',
  requiredDropdownsLocator: '//div[@id="product"]/div[contains(@class, "required")]/div[contains(@class, "sbHolder")]/a[contains(text(), "Please Select")]',
  priceText: { xpath: '//div[@class="price"]/span' },
  requiredDropdownsLocatorStart: '//div[@id="product"]/div[contains(@class, "required")]',
  requiredDropdownsLocatorEnd: '/div[contains(@class, "sbHolder")]/a[contains(text(), "Please Select")]',
  selectColorDropdownLocator: { xpath: '//div[contains(@id, "sbHolder")]/a[contains(@class, "sbToggle")]' },
  listOfColorsLocator: { xpath: '//div[contains(@class, "required")]/div[contains(@id, "sbHolder")]/ul[not(contains(@style, "display: none"))]/li'},
  selectRandomColorLocator: '//div[contains(@class, "required")]/div[contains(@id, "sbHolder")]/ul[not(contains(@style, "display: none"))]/li',
  buttonAddToCardLocatot: '//*[@id="button-cart"]',
  shoppingPageButton: { xpath: '//*[@id="cart"]/button' },
  allProductsInBasket: { xpath: '//*[@id="cart"]/ul/li[@class="product"]/div[3]/div/span'},
  async getProductPrice() {
    return await I.grabTextFrom(this.priceText);
  },
  async getListOfavalilableColors() {
    return await I.grabTextFromAll(this.listOfColorsLocator);
  },
  async getListOfavalilableDropdowns() {
    return await I.grabTextFromAll(this.requiredDropdownsLocator);
  },
  openLinkOfProduct(){
    I.amOnPage(this.buyProductLink);
  },
  async getListOfElementsInBasket() {
    I.click(this.shoppingPageButton);
    return await I.grabTextFromAll(this.allProductsInBasket);
  },
  checkPriseOfLastProductInBasket(listOfProducts){    
    let totalPrice = listOfProducts[listOfProducts.length-1];
    let totalPriceNumber = totalPrice.slice(1);
    console.log('totalPriceNumber =', totalPriceNumber);
    return Number(totalPriceNumber);
  },
  priceToNumber(price){
    return Number(price.slice(1));
  },
  concatAllPrices(mainPrice, listOfAdditionalPrices){
    let totalPriceOfList = 0;
    let mainPriceNumber = Number(mainPrice.slice(1));
    for (i = 0; i < listOfAdditionalPrices.length; i++){
      let startIndex = listOfAdditionalPrices[i].indexOf("$");
      let endIndex = listOfAdditionalPrices[i].indexOf(")");
      totalPriceOfList += Number(listOfAdditionalPrices[i].slice((startIndex + 1), (endIndex - 1)));
    }
    return mainPriceNumber + totalPriceOfList;
  },
  randomDropdownElement(max) {
    return Math.floor(Math.random() * (max - 2) + 2);
  },
selectRequiredElements(numberOfElementsOnPage){
    let clickElement = this.requiredDropdownsLocatorStart + `[${numberOfElementsOnPage}]` + `${this.requiredDropdownsLocatorEnd}`;
    I.click(clickElement);
    return clickElement;        
  },
selectRandomDropdownElement(numberOfDropdownElements){
    let randomDropdown = this.randomDropdownElement(numberOfDropdownElements);
    let dropdownLocator = this.selectRandomColorLocator + `[${randomDropdown}]` + '/a[not(text()="--- Please Select ---")]';
    I.click(dropdownLocator);
    return randomDropdown;
  }
}

