import {expect, Locator, Page}  from '@playwright/test';
import { BasePage } from './BasePage';

export  class CartPage extends BasePage {
    readonly cartItem: Locator;
    readonly checkoutButton: Locator;
    readonly emptyCartMessage: Locator;

    constructor(page:Page){
        super(page)

    this.cartItem = page.locator('tbody tr, .cart-item');
    this.checkoutButton = page.getByRole('button', { name: /proceed to checkout|checkout/i});
    this.emptyCartMessage = page.getByText( /cart is empty|no items/i);
    
    }

    async expectCartPage(): Promise<void>{
        await expect(this.page).toHaveURL(/checkout|cart/);
    }

}

