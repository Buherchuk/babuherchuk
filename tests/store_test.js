
let loginUser = {
    email: '1671394245194@test.com',
    password: 'fUxXF8vY7W3d',
}

Feature('buy product');

  Before(({ I }) => {
    I.login(loginUser);
  });

Scenario('buy', async ({ I, productPage }) => {
    productPage.openLinkOfProduct();
    let mainPrice = await productPage.getProductPrice();
    let additionalPrices = [];
    let listOfDropdowns = await productPage.getListOfavalilableDropdowns();
    let additionalPricesSelectedNumber = 0;
    let dropdownsLen = listOfDropdowns.length;
    let listOfElements = [];
    let summaryPrice;
    console.log('dropdownsLen = ', dropdownsLen);
    for (let i = 1; i <= dropdownsLen; i++){
        productPage.selectRequiredElements(i);
        listOfElements = await productPage.getListOfavalilableColors();
        let numberOfElInList = listOfElements.length;
        if (numberOfElInList == 1){
            continue;
        }        
        additionalPricesSelectedNumber = productPage.selectRandomDropdownElement(numberOfElInList);
        additionalPrices.push(listOfElements[additionalPricesSelectedNumber]);
    }
    summaryPrice = productPage.concatAllPrices(mainPrice, additionalPrices);
    console.log('summaryPrice', summaryPrice);
    I.click(productPage.buttonAddToCardLocatot);
    let listOfElementsInBasket = await productPage.getListOfElementsInBasket();
    let priceInBasket = productPage.checkPriseOfLastProductInBasket(listOfElementsInBasket);
    I.assertEqual(summaryPrice, priceInBasket, `summary price = ${summaryPrice} is not mach to priceInBasket = ${priceInBasket}`);
}).tag('buy');