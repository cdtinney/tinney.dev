import PropTypes from "prop-types";

import classNames from "../../utils/classNames";

import "./Anchor.css";

const colorEnum = {
  primary: "primary",
  secondary: "secondary",
};

export default function Anchor({
  href,
  external,
  title,
  ariaLabel,
  color,
  className,
  children,
}) {
  const props = {
    title,
    className: classNames("root", colorEnum[color], className),
    "aria-label": ariaLabel,
  };

  return external ? (
    <a href={href} {...props}>
      {children}
    </a>
  ) : (
    <a to={href} {...props}>
      {children}
    </a>
  );
}

Anchor.propTypes = {
  href: PropTypes.string.isRequired,
  external: PropTypes.bool,
  title: PropTypes.string,
  ariaLabel: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

Anchor.defaultProps = {
  external: false,
  title: null,
  ariaLabel: null,
  color: "primary",
  className: "",
  children: null,
};
