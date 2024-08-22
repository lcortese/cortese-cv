import React, { useMemo } from "react";
import { Analytics } from "@vercel/analytics/react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
  useParams,
} from "react-router-dom";

import Theme from "./Theme";
import MainPage from "./MainPage";
import { IntlProvider } from "react-intl";

const appElement = document.getElementById("app");

if (!appElement) {
  throw new Error("Missing 'app' container element.");
}

import { DEFAULT_LOCALE, LOCALES } from "./intl/constants/langs";
import { useMessages } from "./intl/useMessages";
import ErrorPage from "./ErrorPage";
import NotFoundPage from "./NotFoundPage";

const Root = () => {
  const { locale: localeParam } = useParams();
  const locale = useMemo(() => {
    const newValue = localeParam || DEFAULT_LOCALE;
    return LOCALES.find((lang) => lang === newValue);
  }, [localeParam]);

  const { data, error } = useMessages(locale);

  if (!locale) {
    return <NotFoundPage />;
  }

  if (!error) {
    return (
      <IntlProvider messages={data} locale={locale}>
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
