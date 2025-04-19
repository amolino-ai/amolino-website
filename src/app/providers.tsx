'use client'

import { MantineProvider } from '@mantine/core'
import { ThemeProvider, useTheme } from 'next-themes'
import posthog from 'posthog-js'
import { PostHogProvider as PHProvider } from 'posthog-js/react'
import { useEffect } from 'react'
import PostHogPageView from './PostHogPageView'

function ThemeWatcher() {
  let { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_POSTHOG_KEY) {
      console.log('Initializing PostHog with key:', process.env.NEXT_PUBLIC_POSTHOG_KEY)
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
        capture_pageview: false,
      })
    } else {
      console.warn('PostHog key not found in environment variables')
    }
  }, [])

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_POSTHOG_KEY) {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
        capture_pageview: false, // Disable automatic pageview capture, as we capture manually
      })
    }
  }, [])

  useEffect(() => {
    // Force light theme on initial load
    setTheme('light')

    // Comment out or remove the system theme detection
    // let media = window.matchMedia('(prefers-color-scheme: dark)')
    // function onMediaChange() {
    //   let systemTheme = media.matches ? 'dark' : 'light'
    //   if (resolvedTheme === systemTheme) {
    //     setTheme('system')
    //   }
    // }
    // onMediaChange()
    // media.addEventListener('change', onMediaChange)
    // return () => {
    //   media.removeEventListener('change', onMediaChange)
    // }
  }, [setTheme]) // Remove resolvedTheme from dependencies since we're not using it

  return null
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <PHProvider client={posthog}>
      <ThemeProvider attribute="class" disableTransitionOnChange defaultTheme="light" forcedTheme="light">
        <ThemeWatcher />
        <PostHogPageView />
        <MantineProvider>{children}</MantineProvider>
      </ThemeProvider>
    </PHProvider>
  )
}
