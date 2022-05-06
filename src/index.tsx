import React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query'
import ContextProvider from './components/ContextProvider';

const client = new QueryClient()

const html = document.getElementById('root') as HTMLElement
const root = createRoot(html)
root.render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <ContextProvider>
        <App />
      </ContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
)