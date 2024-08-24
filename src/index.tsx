import React, { useMemo } from "react";
import { IntlProvider } from "react-intl";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

import Theme from "./Theme";
import MainPage from "./pages/MainPage";
import ErrorPage from "./pages/ErrorPage";
import NotFoundPage from "./pages/NotFoundPage";

const appElement = document.getElementById("app");

if (!appElement) {
  throw new Error("Missing 'app' container element.");
}

import { DEFAULT_LOCALE, LOCALES } from "./hooks/intl/constants/langs";
import { useMessages } from "./hooks/intl/useMessages";

const Root = () => {
  const { locale: localeParam } = useParams();
  const locale = useMemo(() => {
    const newValue = localeParam || DEFAULT_LOCALE;
    return LOCALES.find((lang) => lang === newValue);
  }, [localeParam]);

  const { data, error } = useMessages(locale);

  const handleIntlError = () => {};

  if (!locale) {
    return <NotFoundPage />;
  }

  if (!error) {
    return (
      <IntlProvider messages={data} locale={locale} onError={handleIntlError}>
        <Outlet />
      </IntlProvider>
    );
  }

  return <ErrorPage />;
};

createRoot(appElement).render(
  <>
    <Theme>
      <BrowserRouter>
        <Routes>
          <Route path="/:locale?" Component={Root}>
            <Route index Component={MainPage} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Theme>
    <Analytics />
  </>,
);
