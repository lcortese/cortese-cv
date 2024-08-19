import { useMemo } from "react";
import { useParams } from "react-router-dom";

import { LOCALES } from "./constants/langs";

export const useLocale = () => {
  const { locale } = useParams();
  const value = useMemo(() => {
    return LOCALES.find((value) => value === locale);
  }, [locale]);

  return value;
};
