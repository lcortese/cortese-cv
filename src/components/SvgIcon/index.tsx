import React, { useEffect, useMemo, useState } from "react";
import classnames from "classnames";

import type { FontColors, PresentationalProps } from "../@types";
import { FontSizes } from "../@types";

import * as styles from "./styles.module.scss";

type Props = PresentationalProps & {
  size?: `${FontSizes}`;
  color?: `${FontColors}`;
  src: string;
  alt?: string;
};

const SvgIcon = ({
  className,
  size = `${FontSizes.Md}`,
  color,
  src,
}: Props) => {
  const [data, setData] = useState<string>();
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(src);
        const newData = response.ok ? await response.text() : undefined;
        setData(newData);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        setData(undefined);
      }
    })();
  }, [src]);

  const extraProps = useMemo(
    () =>
      data
        ? {
            dangerouslySetInnerHTML: { __html: data },
          }
        : undefined,
    [data],
  );

  return (
    <i
      className={classnames(
        styles["svg-icon"],
        styles[`svg-icon--size-${size}`],
        styles[`svg-icon--color-${color}`],
        className,
      )}
      {...extraProps}
    />
  );
};

export default SvgIcon;
