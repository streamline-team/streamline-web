import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { KindeProvider } from '@kinde-oss/kinde-auth-react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <KindeProvider
      clientId={import.meta.env.VITE_KINDE_CLIENT_ID}
      domain={import.meta.env.VITE_KINDE_DOMAIN || ''}
      redirectUri={import.meta.env.VITE_KINDE_REDIRECT_URI || ''}
      logoutUri={import.meta.env.VITE_KINDE_LOGOUT_URI}
    >
      <App />
    </KindeProvider>
  </React.StrictMode>
)
