import React from 'react';
import { createRoot } from 'react-dom/client';
import Theme from './Theme';
import Main from './Main';
import Layout from './components/Layout';

const appElement = document.getElementById('app');

if (!appElement) {
    throw new Error("Missing 'app' container element.");
}

createRoot(appElement).render(
  <Theme>
    <Layout>
      <Main />
    </Layout>
  </Theme>
);
