import React from "react";
import logo from "../images/App Store Badge.svg";
import logos from "../images/Google Play Badge.svg";

function Footer() {
  return (
    <footer className="container px-12 py-20 mx-auto grid grid-cols-4">
      <div className="text-white">
        <h3 className="text-xl text-white">Company</h3>
        <ul>
          <li className="">
            <a href="#" className="">
              About Us
            </a>
          </li>
          <li className="">
            <a href="#" className="f">
              Careers
            </a>
          </li>
          <li className="footer__item">
            <a href="#" className="">
              Contact Us
            </a>
          </li>
        </ul>
      </div>

      <div class="footer__data">
        <h3 class="text-xl text-white">Support</h3>
        <ul>
          <li class="footer__item">
            <a href="" class="footer__link">
              Help Center
            </a>
          </li>
          <li class="footer__item">
            <a href="#" class="footer__link">
              Support Center
            </a>
          </li>
        </ul>
      </div>

      <div class="footer__data">
        <h3 class="text-xl text-white">Legal</h3>
        <ul>
          <li class="footer__item">
            <a href="" class="footer__link">
              Cookies Policy
            </a>
          </li>
          <li class="footer__item">
            <a href="#" class="footer__link">
              Privacy Policy
            </a>
          </li>
          <li class="footer__item">
            <a href="" class="footer__link">
              Terms of Service
            </a>
          </li>
          <li class="footer__item">
            <a href="" class="footer__link">
              Dispute resolution
            </a>
          </li>
        </ul>
      </div>

      <div class="footer__data">
        <h3 class="text-xl text-white">Install App</h3>
        <ul>
          <li class="footer__item">
            <a href="#" class="footer__link">
              <img src={logos} alt="Google badge" />
            </a>
          </li>
          <li class="footer__item">
            <a href="#">
              <img src={logo} alt="App badge" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
