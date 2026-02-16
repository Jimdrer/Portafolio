'use client'

import * as React from 'react'
import { HeroUIProvider } from '@heroui/react' 
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from 'next-themes'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (<HeroUIProvider>
  <NextThemesProvider 
  attribute="class" 
  defaultTheme="system"
  enableSystem={true}
  storageKey="theme"
  disableTransitionOnChange
  {...props}>
    {children}
    </NextThemesProvider>
    </HeroUIProvider>
  )
}
