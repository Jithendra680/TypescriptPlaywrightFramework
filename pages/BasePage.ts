
import { expect, Locator, Page } from '@playwright/test';

export class BasePage {
  constructor(protected readonly page: Page) {}

  async openHome(): Promise<void> {
    await this.page.goto('/');
  }

  async expectVisible(locator: Locator): Promise<void> {
    await expect(locator).toBeVisible();
  }

  async click(locator: Locator): Promise<void> {
    await locator.click();
  }

  async fill( locator: Locator, value: string): Promise<void> {
    await locator.fill(value);
  }
}
