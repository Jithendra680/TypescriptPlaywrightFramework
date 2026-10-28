import {expect, Locator, Page} from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage{
    readonly email: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;
    readonly alert: Locator;

    constructor(page: Page){
        super(page);

    this.email = page.getByRole('textbox',{name: /email/i});
    this.password = page.getByLabel(/password/i);
    this.loginButton = page.getByRole('button', {name: /login/i});
    this.alert = page.locator( '[role="alert"], .alert-danger, .help-block' );
    }

    async login(email: string, password: string): Promise<void>{
        await this.email.fill(email);
        await this.password.fill(password);
        await this.loginButton.click();
    }

    async expectLoginPage(): Promise<void> {
        await expect(this.page).toHaveURL(/auth\/login/);

    }
}