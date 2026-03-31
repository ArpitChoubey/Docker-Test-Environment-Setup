import { test, expect } from '@playwright/test';

test('Mock API test', async ({ request }) => {
  const res = await request.get('http://mock-api:3000/users');
  expect(res.status()).toBe(200);
});