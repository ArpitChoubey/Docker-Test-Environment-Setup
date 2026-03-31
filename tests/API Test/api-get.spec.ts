import { test, expect } from '@playwright/test';

test('Mock API test', async ({ request }) => {
  const res = await request.get('https://gorest.co.in/public/v2/users');
  expect(res.status()).toBe(200);
});