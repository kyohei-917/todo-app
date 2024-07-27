import { test, expect } from '@playwright/test';

// ユーザーとして、自分のタスクを追跡できるように、新しい ToDo 項目を作成したいと考えています。
test('As a user, I want to create a new to-do item so that I can keep track of my tasks', async ({ page }) => {
  const testTodoTitle = 'タスク新規追加のテスト';

  // ログインしてTODOページに遷移する
  await page.goto('/');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('#email').fill('haru.kk.917@gmail.com');
  await page.locator('#password').fill('exz9wqy@PKH*rph3jer');
  await page.getByRole('button', { name: 'Log in with Email' }).click();
  await expect(page).toHaveURL('/todo');

  // 新しいTODOを作成する
  await expect(page.getByText(testTodoTitle)).not.toBeVisible();
  await page.getByRole('button', { name: 'Add New' }).click();
  await page.getByLabel('Title', { exact: true }).fill(testTodoTitle);
  await page.getByRole('button', { name: 'Create' }).click();

  // 作成されたTODOが表示されていることを確認する
  await expect(page.getByText(testTodoTitle)).toBeVisible();
});

