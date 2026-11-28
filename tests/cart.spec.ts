import { test, expect } from '@playwright/test';
import { login } from '../pages/Login';
import products from '../test-data/products.json'


test.beforeEach(async ({ page }) => {
    await login(page)
})

test("test 10: Adding items to the shopping cart", async ({ page }) =>{
    await page.locator("#add-to-cart-sauce-labs-backpack").click();
    await expect(page.getByText(products.backpack.name)).toBeVisible();

    await page.locator("#add-to-cart-sauce-labs-bike-light")
    await expect(page.getByText(products.bikelight.name)).toBeVisible();
})
