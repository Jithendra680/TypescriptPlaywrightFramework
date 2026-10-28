import {expect, Locator, Page} from '@playwright/test';
import { BasePage } from './BasePage';

export class ProductPage extends BasePage{

    readonly title: Locator;
    readonly addToCartButton: Locator;
    readonly quantityInput: Locator;
    readonly cartToast: Locator;

    constructor(page:Page){
        super(page);

    this.title = page.locator('h1');
    this.addToCartButton = page.getByRole('button',{name: /add to cart/i});
    this.quantityInput = page.locator('input[type="number"]');
    this.cartToast = page.locator('.toast, [role="alert"]');
    }

    async expectProductDetails(): Promise<void>{
        await expect(this.title).toBeVisible();
    }

    async addToCart(): Promise<void>{
        await this.addToCartButton.click();
    }
}