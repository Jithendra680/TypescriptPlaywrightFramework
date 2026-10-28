import {expect, Locator, Page} from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage{

    readonly searchInput: Locator;
    readonly searchButton: Locator;
    readonly productCards: Locator;
    readonly signInLink: Locator;
    readonly cartLink: Locator;

    constructor(page: Page) {
    super(page);

    this.searchInput = page.getByRole('textbox',{name: /search/i});
    this.searchButton = page.getByRole('button',{name: /search/i});
    this.productCards = page.locator('#a.card');
    this.signInLink = page.getByRole('link', { name: /sign in/i});
    this.cartLink = page.getByRole('link', { name: /cart/i});

    }

    async searchFor(term: string): Promise<void>{
        await this.searchInput.fill(term);
        await this.searchButton.click();
    }

    async openSignIn(): Promise<void>{
        await this.signInLink.click();
    }

    async openFirstProduct(): Promise<void>{
        await this.productCards.first().click();
    }

    async expectProductSearchResults(term: string): Promise<void>{
        await expect(this.page.getByText(new RegExp(term, 'i')).first()).toBeVisible();
    }



}
