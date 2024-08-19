import { useEffect, useMemo, useState } from "react";

import type { Message } from "./@types";
import { Locales } from "./constants/langs";
import { get } from "./services";

export const useMessages = (locale?: Locales) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();
  const [data, setData] = useState<Record<Locales, Message | undefined>>({
    [Locales.EnUs]: undefined,
    [Locales.EsAr]: undefined,
  });

  const loaded = useMemo(() => {
    return !!locale && !!data?.[locale];
  }, [data, locale]);

  useEffect(() => {
    if (loaded || !locale) {
      return;
    }
    setLoading(true);

    get(locale)
      .then((newData) => {
        setData({
          ...data,
          [locale]: newData,
        });
      })
      .catch(setError)
      .finally(() => {
        setLoading(false);
      });
  }, [locale, loaded]);

  return {
    loading,
    loaded,
    error,
    data: locale ? data[locale] : undefined,
  };
};
