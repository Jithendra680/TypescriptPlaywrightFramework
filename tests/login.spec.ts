
import { test, expect } from '../fixtures/testFixtures';

test.describe('Authentication UI @regression', () => {

  test.beforeEach(async ({ homePage }) => {
    await homePage.openHome();
    await homePage.openSignIn();
  });

  test('TC008 - Login form fields are visible', async ({
    loginPage
  }) => {
    await expect(loginPage.email).toBeVisible();
    await expect(loginPage.password).toBeVisible();
    await expect(loginPage.loginButton).toBeVisible();
  });

  test('TC009 - Invalid login stays on login page', async ({
    page,
    loginPage
  }) => {
    await loginPage.login(
      'invalid-user@example.com',
      'incorrect-password'
    );

    await expect(page).toHaveURL(/auth\/login/);
  });

  test('TC010 - Empty required fields are rejected', async ({
    loginPage
  }) => {
    await loginPage.loginButton.click();

    await expect(loginPage.email).toHaveAttribute(
      'required',
      ''
    );

    await expect(loginPage.password).toHaveAttribute(
      'required',
      ''
    );
  });

});
