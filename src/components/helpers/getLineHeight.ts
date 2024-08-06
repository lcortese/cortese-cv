import type { FontSizes } from "../@types";

export const getLineHeight = (value: `${FontSizes}`) => {
  if (value === '1') return "xl";
  if (value === '2') return "xl";
  if (value === '3') return "lg";
  if (value === '4') return "md";
  if (value === '5') return "sm";
  if (value === '6') return "xs";
}
