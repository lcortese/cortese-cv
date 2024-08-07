export type WrapperProps = {
  children?: React.ReactNode;
  className?: string;
};

export const enum Headings {
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
  H4 = "h4",
  H5 = "h5",
  H6 = "h6",
}

const enum Sizes {
  Xs = "xs",
  Sm = "sm",
  Md = "md",
  Lg = "lg",
  Xl = "xl",
}

export const enum FontSizes {
  Xs = Sizes.Xs,
  Sm = Sizes.Sm,
  Md = Sizes.Md,
  Lg = Sizes.Lg,
  Xl = Sizes.Xl,
}

export const enum FontWeights {
  Light = "light",
  Medium = "medium",
  Normal = "normal",
  Bold = "bold",
}

export const enum FontColors {
  Highlight = "highlight",
  Light = "light",
  Default = "default",
}

export const enum FontLineHeights {
  Normal = "normal",
  Xs = Sizes.Xs,
  Sm = Sizes.Sm,
  Md = Sizes.Md,
  Lg = Sizes.Lg,
  Xl = Sizes.Xl,
}

export const enum FontMargins {
  None = "none",
  Xs = Sizes.Xs,
  Sm = Sizes.Sm,
  Md = Sizes.Md,
  Lg = Sizes.Lg,
  Xl = Sizes.Xl,
}
