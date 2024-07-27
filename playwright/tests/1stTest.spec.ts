import { test, expect } from '@playwright/test';

// .env動かないのでコメントアウト
// const userEmail = process.env.TEST_USER_EMAIL ?? '';
// const userPassword = process.env.TEST_USER_PASSWORD ?? '';

test('既存ユーザーでログインしtodoページへ遷移する', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Sign In' }).click();
  // .env動かないのでコメントアウト
  // await page.locator('#email').fill(userEmail);
  // await page.locator('#password').fill(userPassword);
  await page.locator('#email').fill('haru.kk.917@gmail.com');
  await page.locator('#password').fill('exz9wqy@PKH*rph3jer');
  await page.getByRole('button', { name: 'Log in with Email' }).click();
  await expect(page).toHaveURL('/todo');
});

