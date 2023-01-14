import { MantineProvider } from '@mantine/core'
import { QueryClient } from '@tanstack/query-core'
import { QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import UserContextProvider from './context/UserContext'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <UserContextProvider>
        <App />
        </UserContextProvider>
      </MantineProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
