import React from "react";

function Footer() {
  return (
    <footer className="section-wrapper" id="footer-wrapper">
      <div className="section-center-wrapper" id="footer-center-wrapper">
        <p id="contact-number">
          Questions? Call{" "}
          <a id="contact-number-link" href="tel:800-683-570">
            800-683-570
          </a>
        </p>
        <ul id="footer-links">
          <li className="footer-link-container">
            {" "}
            <a
              className="footer-link-element"
              href="https://help.netflix.com/en/node/412"
            >
              FAQ
            </a>
          </li>
          <li className="footer-link-container">
            {" "}
            <a
              className="footer-link-element"
              href="https://help.netflix.com/en/"
            >
              Help Center
            </a>
          </li>
          <li className="footer-link-container">
            {" "}
            <a
              className="footer-link-element"
              href="https://help.netflix.com/en/"
            >
              Account
            </a>
          </li>
          <li className="footer-link-container">
            {" "}
            <a className="footer-link-element" href="https://media.netflix.com">
              Media Center
            </a>
          </li>
          <li className="footer-link-container">
            {" "}
            <a
              className="footer-link-element"
              href="https://www.netflixinvestor.com/ir-overview/profile/default.aspx"
            >
              Investor Relations
            </a>
          </li>
          <li className="footer-link-container">
            {" "}
            <a className="footer-link-element" href="https://jobs.netflix.com/">
              Jobs
            </a>{" "}
          </li>
          <li className="footer-link-container">
            {" "}
            <a
              className="footer-link-element"
              href="https://www.netflix.com/it-en/redeem"
            >
              Redeem Gift Cards
            </a>{" "}
          </li>
          <li className="footer-link-container">
            {" "}
            <a
              className="footer-link-element"
              href="https://www.netflix.com/gift-cards"
            >
              Buy Gift Cards
            </a>{" "}
          </li>
          <li className="footer-link-container">
            {" "}
            <a
              className="footer-link-element"
              href="https://devices.netflix.com/en/"
            >
              Ways to Watch
            </a>{" "}
          </li>
          <li className="footer-link-container">
            {" "}
            <a
              className="footer-link-element"
              href="https://help.netflix.com/legal/termsofuse"
            >
              Terms of Use
            </a>{" "}
          </li>
          <li className="footer-link-container">
            {" "}
            <a
              className="footer-link-element"
              href="https://help.netflix.com/legal/privacy"
            >
              Privacy
            </a>{" "}
          </li>
          <li className="footer-link-container">
            {" "}
            <a
              className="footer-link-element"
              href="https://help.netflix.com/legal/privacy#cookies"
            >
              Cookie Preferences
            </a>
          </li>
          <li className="footer-link-container">
            {" "}
            <a
              className="footer-link-element"
              href="https://help.netflix.com/en/node/2101"
            >
              Corporate Information
            </a>{" "}
          </li>
          <li className="footer-link-container">
            {" "}
            <a
              className="footer-link-element"
              href="https://help.netflix.com/en/contactus"
            >
              Contact Us
            </a>{" "}
          </li>
          <li className="footer-link-container">
            {" "}
            <a className="footer-link-element" href="https://fast.com/">
              Speed Test
            </a>{" "}
          </li>
          <li className="footer-link-container">
            {" "}
            <a
              className="footer-link-element"
              href="https://help.netflix.com/legal/notices"
            >
              Legal Notices
            </a>{" "}
          </li>
          <li className="footer-link-container">
            {" "}
            <a
              className="footer-link-element"
              href="https://www.netflix.com/it-en/browse/genre/839338"
            >
              Netflix Originals
            </a>{" "}
          </li>
        </ul>
        <div id="language-selector-wrapper">
          <div id="language-selector">
            <select name="language" id="lang-dropdown">
              <option value="english">English</option>
              <option value="italian">Italino</option>
            </select>
          </div>
        </div>
        <h6 className="font-light">Netflix</h6>
      </div>
    </footer>
  );
}

export default Footer;
