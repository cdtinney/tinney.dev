import PropTypes from "prop-types";
import classNames from "../../../../src/utils/classNames";
import Anchor from "../Anchor/Anchor";
import { SiteMetadata } from "../../constants/site-metadata";
import "./Brand.css";

function Brand({ className, underline, large }) {
  return (
    <h1
      className={classNames(
        "header",
        {
          ["headerUnderline"]: underline,
          ["headerLarge"]: large,
        },
        className
      )}
    >
      <Anchor href="/" className={"link"}>
        {SiteMetadata.brandName}
      </Anchor>
    </h1>
  );
}

Brand.propTypes = {
  className: PropTypes.string,
  underline: PropTypes.bool,
  large: PropTypes.bool,
};

Brand.defaultProps = {
  className: "",
  underline: true,
  large: false,
};

export default Brand;
