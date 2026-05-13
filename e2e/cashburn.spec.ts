import { test, expect } from '@playwright/test';

test('Cash Burn page renders all key sections', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByText('TANDE')).toBeVisible();

  await expect(page.getByText('Cash Balance')).toBeVisible();
  await expect(page.getByText('Monthly Burn')).toBeVisible();
  await expect(page.getByText('Runway')).toBeVisible();
  await expect(page.getByText('Total Cash In')).toBeVisible();
  await expect(page.getByText('Total Cash Out')).toBeVisible();

  await expect(page.getByText('Monthly Cash Movement')).toBeVisible();
  await expect(page.getByText("Jul '24")).toBeVisible();
  await expect(page.getByText("Feb '25")).toBeVisible();
});

test('KPI values are visible', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByText('£95k')).toBeVisible();
  await expect(page.getByText('≈ 7 wks')).toBeVisible();
  await expect(page.getByText('£444k')).toBeVisible();
});
