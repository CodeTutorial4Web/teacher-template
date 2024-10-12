import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerLinks">
        <Link to="/terms-and-conditions">Terms and Conditions</Link>

        <Link
          to="/
privacy-policy"
        >
          Privacy Policy
        </Link>

        <Link to="/refund-policy">Refund Policy</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
      <div className="developedBy">
        Developed By
        <a href="https://codetutorial4web.pages.dev/" rel="noopener noreferrer"> Mostafa</a>
      </div>
      <p className="copyRight">All copy rights reserved © 2024</p>
    </footer>
  );
}
