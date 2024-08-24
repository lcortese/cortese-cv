import { useMemo } from "react";

const SEPARATOR = " | ";

const useWindowTitle = () => {
  const [title, subtitle] = useMemo(() => {
    return document.title.split(SEPARATOR);
  }, [document.title]);

  const setTitle = (value?: string) => {
    document.title = [value, subtitle].filter(Boolean).join(SEPARATOR);
  };

  const setSubtitle = (value?: string) => {
    document.title = [title, value].filter(Boolean).join(SEPARATOR);
  };

  return {
    title,
    subtitle,
    setTitle,
    setSubtitle,
  };
};

export default useWindowTitle;
