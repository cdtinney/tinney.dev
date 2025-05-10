import PropTypes from "prop-types";
import Anchor from "../Anchor/Anchor";
import AnchorButton from "../AnchorButton/AnchorButton";
import "./ContactCard.css";

function ContactCard({ siteMetadata = {} }) {
  const { contact, social } = siteMetadata;
  return (
    <div className={"contact-card-container"}>
      <div className={"contact-card-container__social"}>
        <Anchor
          title={`${social.github} on GitHub`}
          href={`https://github.com/${social.github}`}
          external
          ariaLabel="GitHub profile"
        >
          GitHub
        </Anchor>
        <Anchor
          title={`${social.linkedin} on LinkedIn`}
          href={`https://linkedin.com/in/${social.linkedin}`}
          external
          aria-label="LinkedIn profile"
        >
          LinkedIn
        </Anchor>
      </div>
      <div className={"contact-card-container__email"}>
        <Anchor href={`mailto:${contact.email}`} external>
          {contact.displayedEmail}
        </Anchor>
      </div>
      <AnchorButton
        href={contact.resumeUrl}
        external
        text="resume"
        color="secondary"
        className={"button"}
      />
    </div>
  );
}

ContactCard.propTypes = {
  siteMetadata: PropTypes.shape({
    contact: PropTypes.shape({
      email: PropTypes.string.isRequired,
      displayedEmail: PropTypes.string.isRequired,
      resumeUrl: PropTypes.string.isRequired,
    }).isRequired,
    social: PropTypes.shape({
      github: PropTypes.string.isRequired,
      linkedin: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ContactCard;
