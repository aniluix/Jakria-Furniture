'use client'
import React from "react";
import {
  Navbar,
  Nav,
  Container,
  Offcanvas,
} from "react-bootstrap";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterestP,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import "./Header.css";
import Link from "next/link";

function Header() {

  const keywords = [
    "Premium Quality Furniture",
    "Free Delivery",
    "Easy Return",
    "Modern Interior Design",
    "Luxury Wooden Furniture",
    "Affordable Prices",
    "Home & Office Furniture"
  ];

  return (
    <>
      {/* TOP BAR */}

      <div className="topbar">

        <Container fluid className="container-xl">

          <div className="topbar-inner">

            <div className="social-icons">
              <Link href="#"><FaFacebookF /></Link>
              <Link href="#"><FaInstagram /></Link>
              <Link href="#"><FaTwitter /></Link>
              <Link href="#"><FaPinterestP /></Link>
            </div>

            <div className="marquee">

              <div className="marquee-content">

                {keywords.concat(keywords).map((item,index)=>(
                  <span key={index}>{item}</span>
                ))}

              </div>

            </div>

            <div className="top-contact">

              <span>
                <FaEnvelope /> info@furniture.com
              </span>

              <span>
                <FaMapMarkerAlt /> New York
              </span>

            </div>

          </div>

        </Container>

      </div>

      {/* HEADER */}

      <Navbar
        expand="lg"
        className="main-header sticky-top"
      >

        <Container fluid className="container-xl">

          <Navbar.Brand href="#" className="NavLogoDiv">
            <div className="logo-mark">JF</div>
            <div className="LogTexted">
                <h6>Jakria<span>Furniture</span></h6>
            </div>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="offcanvasNavbar" />

          <Navbar.Offcanvas
            id="offcanvasNavbar"
            placement="end"
          >

            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                Furniture
              </Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>

              <Nav className="mx-auto nav-menu">

                <Nav.Link href="#">Home</Nav.Link>

                <Nav.Link href="#">About</Nav.Link>

                <Nav.Link href="#">Services</Nav.Link>

                <Nav.Link href="#">Blog</Nav.Link>

                <Nav.Link href="#">Contact</Nav.Link>

              </Nav>

              <div className="phone-box">

                <div className="phone-icon">
                  <FaPhoneAlt />
                </div>

                <div>

                  <small>Need Help?</small>

                  <h6>+91 98765 43210</h6>

                </div>

              </div>

            </Offcanvas.Body>

          </Navbar.Offcanvas>

        </Container>

      </Navbar>

    </>
  );
}

export default Header;