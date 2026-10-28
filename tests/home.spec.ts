
import { test, expect } from '../fixtures/testFixtures';
import { searchData } from '../utils/testData';

test.describe('Home page @smoke', () => {

  test.beforeEach(async ({ homePage }) => {
    await homePage.openHome();
  });

  test('TC001 - Home page loads', async ({
    page
  }) => {
    await expect(page).toHaveTitle(
      /Practice Software Testing/i
    );

    await expect(page.locator('body')).toBeVisible();
  });

  test('TC002 - Search returns matching products', async ({
    homePage
  }) => {
    await homePage.searchFor(
      searchData.validProduct
    );

    await homePage.expectProductSearchResults(
      searchData.validProduct
    );
  });

  test('TC003 - Unmatched search shows no results', async ({
    page,
    homePage
  }) => {
    await homePage.searchFor(
      searchData.noResult
    );

    await expect(
      page.getByText(
        /no results|no products found|nothing found/i
      )
    ).toBeVisible({ timeout: 10_000 });
  });

  test('TC004 - Sign in opens the login page', async ({
    homePage,
    loginPage
  }) => {
    await homePage.openSignIn();
    await loginPage.expectLoginPage();
  });

});
