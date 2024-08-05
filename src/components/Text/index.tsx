import React from 'react';

import type { WrapperProps } from '../@types';
import { FontSizes, FontColors, FontWeights } from '../@types';

import * as styles from './styles.module.scss';
import { Elements } from './@types';

export type Props = WrapperProps & {
  element?: `${Elements}`,
  size?: `${FontSizes}`,
  color?: `${FontColors}`,
  weight?: `${FontWeights}`,
  capitalize?: boolean,
};

const Text = ({
  children,
  className,
  element: Element = `${Elements.Span}`,
  size = `${FontSizes.S3}`,
  color = `${FontColors.Default}`,
  weight = `${FontWeights.Normal}`,
  capitalize = false,
}: Props) => {
  const classNames = [
    styles.text,
    styles[`size-${size}`],
    styles[`color-${color}`],
    styles[`weight-${weight}`],
    capitalize && 'capitalize',
    className,
  ].filter(Boolean).join(' ');

  return (
    <Element className={classNames}>{children}</Element>
  );
};

export default Text;
