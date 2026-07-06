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
                <div class="logo-mark">JF</div>
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
                <Link href="#">
                  <FaFacebookF />
                </Link>
                <Link href="#">
                  <FaInstagram />
                </Link>
                <Link href="#">
                  <FaTwitter />
                </Link>
                <Link href="#">
                  <FaPinterestP />
                </Link>
              </div>
            </div>
            <div className="MidTopItem">
              <div className="FtQckLks">
                <h4>Quick Links</h4>
                <ul>
                  <li><Link href="#">Home</Link></li>
                  <li><Link href="#">About</Link></li>
                  <li><Link href="#">Services</Link></li>
                  <li><Link href="#">Blog</Link></li>
                  <li><Link href="#">Contact</Link></li>
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
                <p><FaMapMarkerAlt /> New York, United States</p>
                <p><FaPhoneAlt /> <Link href="">+91 98765 43210</Link></p>
                <p><FaEnvelope /><Link href="">info@furniture.com</Link></p>
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
