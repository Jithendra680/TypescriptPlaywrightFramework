
import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : undefined,

  timeout: 30_000,

  expect: {
    timeout: 7_000
  },

  reporter: [
    ['list'],
    ['html', {
      outputFolder: 'playwright-report',
      open: 'never'
    }],
    ['junit', {
      outputFile: 'test-results/junit-results.xml'
    }]
  ],

  outputDir: 'test-results',

  use: {
    baseURL:
      process.env.BASE_URL ||
      'https://practicesoftwaretesting.com',

    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',

    actionTimeout: 10_000,
    navigationTimeout: 20_000
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome']
      }
    }
  ]
});
