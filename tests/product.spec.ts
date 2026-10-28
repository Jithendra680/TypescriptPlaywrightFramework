
import { test, expect } from '../fixtures/testFixtures';
import { searchData } from '../utils/testData';

test.describe('Product browsing @regression', () => {

  test.beforeEach(async ({ homePage }) => {
    await homePage.openHome();

    await homePage.searchFor(
      searchData.validProduct
    );
  });

  test('TC005 - Matching products are displayed', async ({
    page
  }) => {
    await expect(
      page.getByText(/pliers/i).first()
    ).toBeVisible();
  });

  test('TC006 - Product details page opens', async ({
    homePage,
    productPage
  }) => {
    await homePage.openFirstProduct();

    await productPage.expectProductDetails();
  });

  test('TC007 - Add to cart action is available', async ({
    homePage,
    productPage
  }) => {
    await homePage.openFirstProduct();

    await productPage.expectProductDetails();

    await expect(
      productPage.addToCartButton
    ).toBeVisible();
  });

});
