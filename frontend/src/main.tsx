import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import '@fontsource-variable/geist'
import '@fontsource-variable/geist-mono'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 300_000,
            retry: 1
        }
    }
});

createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={queryClient}>
        <StrictMode>
            <App/>
        </StrictMode>
        <ReactQueryDevtools />
    </QueryClientProvider>
)
