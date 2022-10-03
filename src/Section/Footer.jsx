import React from "react";
import logo from "../images/App Store Badge.svg";
import logos from "../images/Google Play Badge.svg";

function Footer() {
  return (
    <footer className="">
      <div class="footer__data">
        <h3 class="footer__subtitle">Company</h3>
        <ul>
          <li class="footer__item">
            <a href="" class="footer__link">
              About Us
            </a>
          </li>
          <li class="footer__item">
            <a href="#" class="footer__link">
              Careers
            </a>
          </li>
          <li class="footer__item">
            <a href="" class="footer__link">
              Contact Us
            </a>
          </li>
        </ul>
      </div>

      <div class="footer__data">
        <h3 class="footer__subtitle">Support</h3>
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
        <h3 class="footer__subtitle">Legal</h3>
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
        <h3 class="footer__subtitle">Legal</h3>
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
        <h3 class="footer__subtitle">Install App</h3>
        <ul>
          <li class="footer__item">
            <a href="" class="footer__link">
              <img src={logos} alt="Google badge" />
            </a>
          </li>
          <li class="footer__item">
            <img src={logo} alt="App badge" />
            <img src={logo} alt="App badge" />
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
    </footer>
  );
}

export default Footer;
