import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

import { initializeApp } from "firebase/app";
import {  getFirestore } from "firebase/firestore";
import { createTheme, CssBaseline } from '@mui/material';
import CartCtxProvider from './data/cartContext';
import AppCtxProvider from './data/appContext';
import { ThemeProvider } from '@emotion/react';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { BrowserRouter as Router } from 'react-router-dom';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDevwchHjxGpAFjqlC_AQqHSxfUO5SreA8",
  authDomain: "pasta-tria.firebaseapp.com",
  projectId: "pasta-tria",
  storageBucket: "pasta-tria.appspot.com",
  messagingSenderId: "1030081816070",
  appId: "1:1030081816070:web:cec505c778cc6deff04587"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

const theme = createTheme({
  direction: 'rtl',
});
// Create rtl cache
const cacheRtl = createCache({
  key: 'muirtl',
});

function RTL(props) {
  return <CacheProvider value={cacheRtl}>{props.children}</CacheProvider>;
}

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <Router>
      <AppCtxProvider>
        <CartCtxProvider>
          <RTL>
            <ThemeProvider theme={theme}>
              <App />
            </ThemeProvider>
          </RTL>
        </CartCtxProvider>
      </AppCtxProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
