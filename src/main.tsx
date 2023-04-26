import flagsmith from 'flagsmith'
import { FlagsmithProvider } from 'flagsmith/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { options } from './config/flagsmith.config.ts'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <FlagsmithProvider
      options={options}
      flagsmith={flagsmith}
    >
      <App />
    </FlagsmithProvider>
  </React.StrictMode>
)
