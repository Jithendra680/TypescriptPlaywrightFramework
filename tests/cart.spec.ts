
import { test, expect } from '../fixtures/testFixtures';
import { searchData } from '../utils/testData';

test.describe('Cart interaction @regression', () => {

  test('TC011 - User can add a product to cart', async ({
    homePage,
    productPage,
    page
  }) => {
    await homePage.openHome();

    await homePage.searchFor(
      searchData.validProduct
    );

    await homePage.openFirstProduct();

    await productPage.expectProductDetails();

    await productPage.addToCart();

    await expect(
      page.getByText(/added to cart|product added/i).first()
    ).toBeVisible({ timeout: 10_000 });
  });

  test('TC012 - Cart navigation link is available', async ({
    homePage
  }) => {
    await homePage.openHome();

    await expect(
      homePage.cartLink
    ).toBeVisible();
  });

});
