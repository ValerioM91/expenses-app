'use client'

import { ChakraProvider, createSystem, defaultConfig } from '@chakra-ui/react'
import { ColorModeProvider } from './color-mode'
import { Toaster } from './toaster'
import '@fontsource/chakra-petch/400.css'
import '@fontsource/chakra-petch/600.css'
import type { ThemeProviderProps } from 'next-themes'

const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: { value: 'Chakra Petch, sans-serif' },
        body: { value: 'Chakra Petch, sans-serif' },
      },
    },
  },
})

export function Provider(props: ThemeProviderProps) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
      <Toaster />
    </ChakraProvider>
  )
}
