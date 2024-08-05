import React from 'react';
import { createRoot } from 'react-dom/client';
import Theme from './Theme';
import Home from './Home';
import Layout from './components/Layout';

const appElement = document.getElementById('app');

if (!appElement) {
    throw new Error("Missing 'app' container element.");
}

createRoot(appElement).render(
  <Theme>
    <Layout>
      <Home />
    </Layout>
  </Theme>
);
