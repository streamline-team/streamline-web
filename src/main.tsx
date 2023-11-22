import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {KindeProvider} from "@kinde-oss/kinde-auth-react";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <KindeProvider
      clientId="e4f2eb91e927409193df3165d6616a46"
      domain="https://streamline-staging.eu.kinde.com"
      redirectUri="http://localhost:3030"
      logoutUri="http://localhost:3030"
    >
      <App />
    </KindeProvider>
  </React.StrictMode>,
)
