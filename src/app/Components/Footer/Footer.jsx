"use client";
import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterestP,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

import "./Footer.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="FooterSec">
      <Container fluid className="container-xl">
        <div className="FooterData">
          <div className="Footer-Top">
            <div className="LftTopItem">
              <Link href="#" className="FtLogoDiv">
                <div className="logo-mark">JF</div>
                <div className="LogTexted">
                  <h6>
                    Jakria<span>Furniture</span>
                  </h6>
                </div>
              </Link>
              <p className="footer-text">
                We create premium furniture that combines timeless design,
                exceptional craftsmanship, and lasting comfort for every home
                and workspace.
              </p>
              <div className="footer-social">
                <Link target="-blank" href="https://www.facebook.com/JakriaAssociations/">
                  <FaFacebookF />
                </Link>
                <Link target="-blank" href="https://www.instagram.com/jakria_furniture_official/?hl=en">
                  <FaInstagram />
                </Link>
                <Link target="-blank" href="#">
                  <FaTwitter />
                </Link>
                <Link target="-blank" href="#">
                  <FaPinterestP />
                </Link>
              </div>
            </div>
            <div className="MidTopItem">
              <div className="FtQckLks">
                <h4>Quick Links</h4>
                <ul>
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/#About">About</Link></li>
                  <li><Link href="/#Services">Services</Link></li>
                  <li><Link href="/#Team">Teams</Link></li>
                  <li><Link target="_blank" href="/contact-us">Contact</Link></li>
                </ul>
              </div>
              <div className="FtQckLks">
                <h4>Our Services</h4>
                <ul>
                  <li><Link href="#">Living Room</Link></li>
                  <li><Link href="#">Bedroom Furniture</Link></li>
                  <li><Link href="#">Office Furniture</Link></li>
                  <li><Link href="#">Dining Collection</Link></li>
                  <li><Link href="#">Custom Furniture</Link></li>
                </ul>
              </div>
            </div>
            <div className="EndTopItem">
              <h4>Contact Us</h4>
              <div className="footer-contact">
                <p><FaMapMarkerAlt /> Gurdaspur</p>
                <p><FaPhoneAlt /> <Link target="-blank" href="tel:9814645550">+91 9814645550</Link></p>
                <p><FaEnvelope /><Link target="-blank" href="mailto:jakriabalwinder@gmail.com">jakriabalwinder@gmail.com</Link></p>
              </div>
              <div className="newsletter">
                <Form className="newsletter-form">
                  <Form.Control type="email" placeholder="Your Email" />
                  <Button>
                    <FaArrowRight />
                  </Button>
                </Form>
              </div>
            </div>
          </div>
          <hr />
          <div className="footer-bottom">
            <p>All Rights Reserved. Designed By <Link target="_blank" href="https://anilkuix.lovable.app">AnilKumar</Link></p>
            <div>
              <Link href="#">Privacy Policy</Link>
              <Link href="#">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </Container>
      {/* <h2>Jakria Furniture</h2> */}
    </footer>
  );
};

export default Footer;
