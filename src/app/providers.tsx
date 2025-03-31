'use client'

import { useEffect } from 'react'
import { ThemeProvider, useTheme } from 'next-themes'

function ThemeWatcher() {
  let { resolvedTheme, setTheme } = useTheme()

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
    <ThemeProvider attribute="class" disableTransitionOnChange defaultTheme="light" forcedTheme="light">
      <ThemeWatcher />
      {children}
    </ThemeProvider>
  )
}
