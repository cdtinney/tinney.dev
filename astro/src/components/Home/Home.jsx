import Brand from "../../components/Brand/Brand";
import ContactCard from "../../components/ContactCard/ContactCard";
import { SiteMetadata } from "../../constants/site-metadata";
import PageLinks from "../PageLinks/PageLinks";

import "./Home.css";

const siteMetadata = {
  siteUrl: "https://tinney.dev",
  title: "colin tinney",
  contact: {
    name: "Colin Tinney",
    email: "colintinney@gmail.com",
    displayedEmail: "colintinney [at] gmail.com",
    resumeUrl:
      "https://drive.google.com/file/d/1TKfDYPRYclBrcLUoGJB5jMW-zvcR40_A/view?usp=sharing",
  },
  social: {
    github: "cdtinney",
    linkedin: "cdtinney",
  },
};

export default function Home() {
  // const pageDescription = "A personal website";
  const pageLinks = [
    {
      to: "/blog",
      name: "blog",
    },
    {
      to: "/projects",
      name: "projects",
    },
  ];
  const aboutHtml = SiteMetadata.brandDescription;

  return (
    <div className={"home-container"}>
      <header>
        <Brand className={"brand"} large />
        <p
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: aboutHtml }}
        />
        <PageLinks links={pageLinks} />
      </header>
      <main className={"contactCard"}>
        <ContactCard siteMetadata={siteMetadata} />
      </main>
    </div>
  );
}

Home.propTypes = {};
