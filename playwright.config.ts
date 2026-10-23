import { defineConfig, devices } from '@playwright/test'

const PORT = Number(process.env.E2E_PORT ?? 3000)
const BASE_URL = `http://localhost:${PORT}`
const SERVER_START_TIMEOUT_MS = 120_000

export default defineConfig({
  testDir: 'e2e',
  snapshotPathTemplate: '{testDir}/__screenshots__/{testFilePath}/{arg}-{platform}{ext}',
  reporter: [['list'], ['html', { open: 'never', outputFolder: 'playwright-report' }]],
  use: {
    baseURL: BASE_URL,
    ...devices['Desktop Chrome'],
  },
  expect: {
    toHaveScreenshot: {
      // Next's dev-mode badge floats over the page; keep it out of screenshots.
      stylePath: 'e2e/screenshot.css',
    },
  },
  webServer: {
    command: `npm run dev -- --port ${PORT}`,
    url: BASE_URL,
    reuseExistingServer: true,
    timeout: SERVER_START_TIMEOUT_MS,
  },
})
