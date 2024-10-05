import { BsTwitter, BsYoutube } from "react-icons/bs";
import logo from "../../../assets/logo.svg";
import { SiLinkedin } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";

export const FooterView = () => {
  return (
    <footer className="footer-wrapper">
      <section className="footer-section-one">
        <div className="footer-logo-container">
          <img src={logo} alt="logo" />
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </section>
      <section className="footer-section-two">
        <div className="footer-section-columns">
          <span>Quality</span>
          <span>Help</span>
          <span>Share</span>
          <span>Carrers</span>
          <span>Testimonials</span>
          <span>Work</span>
        </div>
        <div className="footer-section-columns">
          <span>244-5333-7783</span>
          <span>hello@food.com</span>
          <span>press@food.com</span>
          <span>contact@food.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </section>
    </footer>
  );
};
