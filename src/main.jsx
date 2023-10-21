import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Authprovider from './context/Authprovider.jsx'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Authprovider>
        <App />
      </Authprovider>
    </QueryClientProvider>
  </React.StrictMode>,
)
