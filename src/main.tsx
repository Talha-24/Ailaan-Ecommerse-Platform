import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain="dev-dg53axarzsyhqlvl.us.auth0.com"
        clientId="HSYihGAoTCynmpy4sU143EMIsGdoNZFc"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
      >
        <App />
      </Auth0Provider>
    </BrowserRouter>
  </StrictMode>
)
