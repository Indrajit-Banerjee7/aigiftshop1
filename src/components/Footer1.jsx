import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook } from "react-icons/fa6";
import { FaGooglePlay } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";



const Footer = () => {
  return (
    <div>
      <footer className="bg-dark text-center text-white">
        <div className="container p-4">
          <section className="mb-4">
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
              <i className="fab fa-facebook-f"><FaFacebook/></i>
            </a>
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
              <i className="fab fa-facebook-f"><FaGooglePlay/></i>
            </a>
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
              <i className="fab fa-facebook-f"><FaInstagram/></i>
            </a>
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
              <i className="fab fa-facebook-f"><FaLinkedinIn/></i>
            </a>
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
              <i className="fab fa-facebook-f"><FaSquareGithub/></i>
            </a>
            {/* Other social media buttons */}
          </section>

          <section className="">
            <form action="">
              <div className="row d-flex justify-content-center">
                <div className="col-auto">
                  <p className="pt-2">
                    <strong>Subscribe for Gift Suggestions</strong>
                  </p>
                </div>

                <div className="col-md-5 col-12">
                  <div className="form-outline form-white mb-4">
                    <input type="email" id="form5Example21" className="form-control" />
                    <label htmlFor="form5Example21" className="form-label" style={{ paddingTop: '2px' }}>
                      Email address
                    </label>
                  </div>
                </div>

                <div className="col-auto">
                  <button type="submit" className="btn btn-outline-light mb-4">
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </section>

          <section className="mb-4">
            <p>
            Unleash Your Creative Spirit - Embark on a Journey of Thoughtful Gifting | Explore Unique AI-Curated Treasures! | Weaving Connections
            between Artistry and Heartfelt Gestures - Giftify | Ignite Imagination - Begin Your Gift Exploration Today
            </p>
          </section>

          <section className="">
            <div className="row">
              {/* Content for About, Resources, Legal, and Product sections */}
            </div>
          </section>
        </div>

        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2023 Copyright: <a className="text-white" href="#">AIGiftShop.com</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
