'use client'

import { MantineProvider, createTheme } from '@mantine/core'
import posthog from 'posthog-js'
import { PostHogProvider as PHProvider } from 'posthog-js/react'
import { useEffect } from 'react'
import PostHogPageView from './PostHogPageView'

// Removed ThemeProvider and ThemeWatcher entirely
// No more theme switching functionality

function PostHogInitializer() {
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_POSTHOG_KEY) {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
        capture_pageview: false,
      })
    } else {
      console.warn('PostHog key not found in environment variables')
    }
  }, [])

  return null
}

export function Providers({ children }: { children: React.ReactNode }) {
  const theme = createTheme({
    primaryColor: 'blue',
  })

  return (
    <PHProvider client={posthog}>
      {/* Completely removed ThemeProvider - no theme switching capability */}
      <PostHogInitializer />
      <PostHogPageView />
      <MantineProvider theme={theme}>{children}</MantineProvider>
    </PHProvider>
  )
}