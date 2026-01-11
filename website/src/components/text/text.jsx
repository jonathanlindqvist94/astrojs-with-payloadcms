const TagMapper = {
  mega: "h1",
  h1: "h1",
  h1Columns: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  title2: "p",
  p: "p",
  plus: "p",
  pLarge: "p",
  pBold: "p",
  paragraph: "p",
  preamble: "p",
  label: "p",
  artnr: "p",
  span: "span",
  substanceName: "p",
  caption: "caption",
  screenReader: "span",
  richtext: "div",
  menuTitle: "h2",
};

const TypographyClasses = {
  mega: "font-bold text-subheader-responsive-font-size",
  h1: "",
  h2: "",
  h3: "",
  h4: "",
  h5: "",
  h6: "",
  title2: "",
  p: "",
  span: "",
  preamble: "",
  label: "",
  screenReader: "",
  richtext: "",
};

const TypographyMarginClasses = {
  mega: "",
  h1: "",
  h2: "",
  h3: "",
  h4: "",
  h5: "",
  h6: "",
  p: "",
  paragraph: "",
  span: "",
  preamble: "",
  label: "",
  screenReader: "",
  richtext: "",
};

const TypographyColorClasses = {
  white: "text-white",
  black: "text-black",
  blue: "text-blue-700",
};

const TypographyWeight = {
  thin: "font-thin",
  extralight: "font-extralight",
  light: "font-light",
  default: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
  extrabold: "font-extrabold",
  black: "font-black",
};

export const Text = ({
  as,
  styleAs,
  weight,
  margin = true,
  wordBreak,
  color,
  className,
  children,
  ...htmlAttributes
}) => {
  const Tag = TagMapper[as] || "p";
  const style = styleAs || as;

  const classes = [
    TypographyClasses[style],
    margin && TypographyMarginClasses[style],
    color && TypographyColorClasses[color],
    wordBreak && "break-words",
    weight && TypographyWeight[weight],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag className={classes} {...htmlAttributes}>
      {children}
    </Tag>
  );
};

export default Text;
