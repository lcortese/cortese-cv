export type WrapperProps = {
  children: React.ReactNode,
  className?: string,
}

export const enum Headings {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
}

export const enum FontSizes {
  S1 = 1,
  S2 = 2,
  S3 = 3,
  S4 = 4,
  S5 = 5,
  S6 = 6,
}

export const enum FontWeights {
  Light = "light",
  Medium = "medium",
  Normal = "normal",
  Bold = "bold",
}

export const enum FontColors {
  Highlight = 'highlight',
  Light = 'light',
  Default = 'default',
}

export const enum FontLineHeights {
  Xs = "xs",
  Sm = "sm",
  Md = "md",
  Normal = "normal",
  Lg = "lg",
  Xl = "xl",
}
