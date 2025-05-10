import PropTypes from "prop-types";
import Anchor from "../Anchor/Anchor";
import classNames from "../../utils/classNames";
import "./AnchorButton.css";

const colorEnum = {
  primary: "primary",
  secondary: "secondary",
};

export function AnchorButton({
  href,
  external,
  title,
  text,
  ariaLabel,
  color,
  className,
}) {
  return (
    <Anchor
      href={href}
      external={external}
      title={title}
      ariaLabel={ariaLabel}
      color={color}
      className={classNames(
        "anchorButton",
        colorEnum[color],
        "button",
        className
      )}
    >
      {text}
    </Anchor>
  );
}

AnchorButton.propTypes = {
  href: PropTypes.string.isRequired,
  external: PropTypes.bool,
  title: PropTypes.string,
  text: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
};

AnchorButton.defaultProps = {
  external: false,
  title: null,
  ariaLabel: null,
  color: "primary",
  className: "",
};

export default AnchorButton;
