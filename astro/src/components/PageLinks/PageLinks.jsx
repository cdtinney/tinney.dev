import PropTypes from "prop-types";

import AnchorButton from "../AnchorButton/AnchorButton";

import "./PageLinks.css";

function PageLinks({ links }) {
  return (
    <div className={"page-links-container"}>
      {links.map(({ to, name }) => (
        <AnchorButton key={to} href={to} color="primary" text={name} />
      ))}
    </div>
  );
}

PageLinks.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PageLinks;
