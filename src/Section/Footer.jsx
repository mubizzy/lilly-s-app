import React from "react";
import logo from "../images/App Store Badge.svg";
import logos from "../images/Google Play Badge.svg";

function Footer() {
  return (
    <footer className="bg-black">
      <div className="container px-12 py-20 mx-auto font-normal grid lg:grid-cols-4 ">
        <div className="text-white text-sm  ">
          <h3 className="text-xl text-white font-medium mb-4">Company</h3>
          <ul>
            <li className="mb-3">
              <a href="#" className="">
                About Us
              </a>
            </li>
            <li className="mb-3">
              <a href="#" className="">
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

        <div className="text-white">
          <h3 className="text-xl text-white mb-4 font-medium">Support</h3>
          <ul>
            <li className="mb-3">
              <a href="#" className="">
                Help Center
              </a>
            </li>
            <li className="mb-3">
              <a href="#" className="">
                Support Center
              </a>
            </li>
          </ul>
        </div>

        <div className="text-white grid ">
          <h3 className="text-xl text-white mb-4 font-medium">Legal</h3>
          <ul>
            <li className="mb-3">
              <a href="#" className="">
                Cookies Policy
              </a>
            </li>
            <li className="mb-3">
              <a href="#" className="">
                Privacy Policy
              </a>
            </li>
            <li className="mb-3">
              <a href="" class="footer__link">
                Terms of Service
              </a>
            </li>
            <li className="">
              <a href="" className="">
                Dispute resolution
              </a>
            </li>
          </ul>
        </div>

        <div className="text-white ">
          <h3 className="text-xl text-white mb-4 font-medium">Install App</h3>
          <ul>
            <li className="mb-3">
              <a href="#" className="">
                <img src={logos} alt="Google badge" />
              </a>
            </li>
            <li className="">
              <a href="#">
                <img src={logo} alt="App badge" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="">
        <p className="">&#169; 2021 LILIES, All rights reserved.</p>
        <div className="footer__terms">
          <a href="#" className="footer__terms-link">
            Terms & Agreements
          </a>
          <a href="#" className="footer__terms-link">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
