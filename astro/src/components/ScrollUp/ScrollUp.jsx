import ScrollToTop from "react-scroll-to-top";

import "./ScrollUp.css";

export default function ScrollUp() {
  return (
    <ScrollToTop
      showUnder={160}
      style={{
        bottom: "70px",
      }}
    >
      <div className={"scroll-up-container button"}>up</div>
    </ScrollToTop>
  );
}
