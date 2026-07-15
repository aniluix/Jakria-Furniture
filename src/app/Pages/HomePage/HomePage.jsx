"use client";
import React, { useEffect, useState } from "react";
import "./HomePage.css";
import { Button, Carousel, Container } from "react-bootstrap";
import Link from "next/link";
import {
  FaArrowRight,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaStarHalfAlt,
  FaStaylinked,
  FaPlay,
  FaFacebook,
  FaInstagramSquare,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";
import CountUp from "react-countup";
import "glightbox/dist/css/glightbox.min.css";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { IoMdCube } from "react-icons/io";
import { IoCheckmarkDoneSharp, IoShareSocialSharp } from "react-icons/io5";
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";

function HomePage() {

  const stats = [
    {
      number: 500,
      suffix: "+",
      label: "Products on display",
    },
    {
      number: 100,
      suffix: "%",
      label: "Quality guaranteed",
    },
    {
      number: 24,
      suffix: "H",
      label: "Always open",
    },
    {
      number: 3.7,
      suffix: "",
      label: "JustDial rating",
      icon: true,
      decimals: 1,
    },
  ];

  const teamData = [
    {
      id: 1,
      image: "/Images/team1.JPEG",
      name: "Balwinder",
      role: "CEO",
      social: [
        { id: 1, icon: <FaFacebookF />, link: "#" },
        { id: 2, icon: <FaXTwitter />, link: "#" },
        { id: 3, icon: <FaInstagram />, link: "#" },
        { id: 4, icon: <FaLinkedinIn />, link: "#" },
      ],
    },
    {
      id: 2,
      image: "/Images/designer.png",
      name: "Anil Kumar",
      role: "Designer",
      social: [
        { id: 1, icon: <FaFacebookF />, link: "#" },
        { id: 2, icon: <FaXTwitter />, link: "#" },
        { id: 3, icon: <FaInstagram />, link: "#" },
        { id: 4, icon: <FaLinkedinIn />, link: "#" },
      ],
    },
    {
      id: 3,
      image: "/Images/team1.jpg",
      name: "John Smith",
      role: "Designer",
      social: [
        { id: 1, icon: <FaFacebookF />, link: "#" },
        { id: 2, icon: <FaXTwitter />, link: "#" },
        { id: 3, icon: <FaInstagram />, link: "#" },
        { id: 4, icon: <FaLinkedinIn />, link: "#" },
      ],
    },
    {
      id: 4,
      image: "/Images/team1.jpg",
      name: "John Smith",
      role: "Designer",
      social: [
        { id: 1, icon: <FaFacebookF />, link: "#" },
        { id: 2, icon: <FaXTwitter />, link: "#" },
        { id: 3, icon: <FaInstagram />, link: "#" },
        { id: 4, icon: <FaLinkedinIn />, link: "#" },
      ],
    },
  ];

  const HeroData = [
    {
      id: 1,
      image: "/Images/HeroCarosel1.jpg",
      subtitle: "TIMELESS ELEGANCE",
      title: "Discover Furniture's For Living",
      description:
        "Elevate your everyday spaces with masterfully crafted sofas and lounge pieces designed for ultimate comfort and striking aesthetics. Experience the perfect harmony of form, texture, and structural excellence.",
      btnText: "Explore Collection",
      btnLink: "/#Services",
    },
    {
      id: 2,
      image: "/Images/HeroCarosel2.jpg",
      subtitle: "MODERN SERENITY",
      title: "Craft Your Perfect Sanctuary",
      description:
        "Transform your bedroom into a peaceful retreat. Our premium bed frames and minimalist storage solutions combine rich textures with clean architectural lines to build an oasis of deep, restorative calm.",
      btnText: "View Bedroom Sets",
      btnLink: "/#Services",
    },
    {
      id: 3,
      image: "/Images/HeroCarosel3.jpg",
      subtitle: "BESPOKE LUXURY",
      title: "Designed For Shared Moments",
      description:
        "Bring sophisticated design to the table. Whether hosting unforgettable dinners or crafting an inspiring home workspace, explore functional statement furniture built to endure and impress.",
      btnText: "Discover More",
      btnLink: "/#Services",
    },
    {
      id: 4,
      image: "/Images/HeroCarosel4.jpg",
      subtitle: "FUNCTIONAL ARTISTRY",
      title: "Designed For Seamless Living",
      description:
        "Bring sophisticated style to your dining room and home office. Explore beautifully crafted tables, ergonomic chairs, and sustainable storage solutions made to elevate your everyday routines.",
      btnText: "Shop New Arrivals",
      btnLink: "/#Services",
    },
  ];

  const generationStats = [
    { id: 1, value: 10, suffix: "k+", label: "Products Sold" },
    { id: 2, value: 35, suffix: "", label: "Years Service" },
    { id: 3, value: 450, suffix: "", label: "Outlets Worldwide" },
    { id: 4, value: 1000, suffix: "+", label: "Satisfied Customers" },
  ];

  const [statsRefreshKey, setStatsRefreshKey] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const refreshStats = () => setStatsRefreshKey((prev) => prev + 1);
    refreshStats();
    window.addEventListener("focus", refreshStats);

    return () => window.removeEventListener("focus", refreshStats);
  }, []);

  const [active, setActive] = useState(0);
  const furnitureData = [
  {
    id: 1,
    title: "Dining room",
    image: "/Images/Diningroom.avif",
  },
  {
    id: 2,
    title: "Living room",
    image: "/Images/Livingroom.avif",
  },
  {
    id: 3,
    title: "Kitchen",
    image: "/Images/kitchenroom.avif",
  },
  {
    id: 4,
    title: "Office",
    image: "/Images/officeroom.avif",
  },
  {
    id: 5,
    title: "Bed room",
    image: "/Images/bedroom.avif",
  },
  {
    id: 6,
    title: "Waiting Hall",
    image: "/Images/WaitingHall.avif",
  },
];

const galleryData = [
  {
    id: 1,
    title: "Luxury Sofa",
    category: "living",
    image: "/Images/gallery1.avif",
  },
  {
    id: 2,
    title: "Wooden Dining Table",
    category: "dining",
    image: "/Images/gallery2.avif",
  },
  {
    id: 3,
    title: "Modern Bed",
    category: "bedroom",
    image: "/Images/gallery3.avif",
  },
  {
    id: 4,
    title: "Office Desk",
    category: "office",
    image: "/Images/gallery4.avif",
  },
  {
    id: 5,
    title: "Luxury Chair",
    category: "living",
    image: "/Images/gallery5.avif",
  },
  {
    id: 6,
    title: "Outdoor Furniture",
    category: "outdoor",
    image: "/Images/gallery6.avif",
  },
];

const [activeCategory, setActiveCategory] = useState("all");
const filteredGallery =
  activeCategory === "all"
    ? galleryData
    : galleryData.filter((item) => item.category === activeCategory);

  return (
    <>
      <Link
        href="https://wa.me/919814645550"
        target="_blank"
        className="wa-float"
        title="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </Link>

      <section className="HeroSection">
        <Carousel fade interval={4000} className="HeroCarouselDiv">
          {HeroData.map((item) => (
            <Carousel.Item key={item.id}>
              <div className="Slider1">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={1400}
                  height={1200}
                  priority={item.id === 1}
                />
                <div className="CarouselFirstText">
                  <div className="sliderhead">
                    <span>{item.subtitle}</span>
                    <h2>{item.title}</h2>
                  </div>
                  
                  <p>{item.description}</p>
                  <div className="HeroBtn">
                    <Link href={item.btnLink}>
                      {item.btnText}{" "}
                      <span>
                        <FaArrowRight />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>

      <section className="ExploreKeySec">
        <div className="ExploreItems">
          <div className="ExploreTrack">
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                <Link href="#">Tailored Furniture For Specific Needs.</Link>
                <Link href="#">
                  <FaStaylinked />
                </Link>
                <Link href="#">Comfort And High Functionality.</Link>
                <Link href="#">
                  <FaStaylinked />
                </Link>
                <Link href="#">Ensure Durability And Longevity.</Link>
                <Link href="#">
                  <FaStaylinked />
                </Link>
                <Link href="#">Diverse Range Of Furniture's.</Link>
                <Link href="#">
                  <FaStaylinked />
                </Link>
                <Link href="#">Comfort And High Functionality.</Link>
                <Link href="#">
                  <FaStaylinked />
                </Link>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <section className="ClientSec" id="About">
        <Container fluid className="container-xl">
          <div className="ClientData">
            <div className="LeftClientItems">
              <span><TfiLayoutLineSolid /> Gurdaspur's Premier Showroom — Est. Gurdaspur, Punjab</span>
              <div className="hdjd">
                <span>CRAFTED</span>
                <h2>FOR YOUR</h2>
                <h6>HOME</h6>
              </div>
              <p>Jakria Furniture brings you <strong>the finest sofas, almirahs & home furnishings</strong> at Gurdaspur's most trusted showroom. Quality that speaks. Craftsmanship that lasts.</p>
              <div className="ClientBtn">
                <Link href="#Services">Explore Collections</Link>
                <Link href="#">Visit Our Showroom</Link>
              </div>
            </div>
            <div className="RightClientItems">
              <Image src="/Images/user2.JPEG" alt="user2.jpg" width={700} height={400} />
            </div>
          </div>
        </Container>
      </section>

      <section className="CustomizedSec">
        <Container fluid className="container-xl">
          <div className="CustomizedData">

            <div className="CustomTop">
              <span>Tailored Furniture</span>
              <h2>Customized Furniture</h2>
            </div>

            <div className="CustomBottom">

              {/* Left Image */}
              <div className="LeftCustom">
                <Image
                  src={furnitureData[active].image}
                  alt={furnitureData[active].title}
                  width={700}
                  height={700}
                  className="img-fluid"
                />
              </div>

              {/* Right Buttons */}
              <div className="RightCustom">
                {furnitureData.map((item, index) => (
                  <Button
                    key={item.id}
                    onClick={() => setActive(index)}
                    className={active === index ? "active" : ""}
                  >
                    <h6>{item.title}</h6>
                  </Button>
                ))}
              </div>

            </div>

          </div>
        </Container>
      </section>

      <section className="OurStorySec">
        <Container fluid className="container-xl">
          <div className="StoryData">
            <div className="LeftStoryDiv">
              <div className="StoryHead">
                <span>
                  <TfiLayoutLineSolid /> Our Story
                </span>
                <h2>
                  Built on <em>Trust & Craft</em>
                </h2>
              </div>
              <p>
                Jakria Furniture has been the{" "}
                <span>
                  go-to destination for premium furniture in Gurdaspur
                </span>{" "}
                for years. Located on Tibri Road, our showroom is designed to
                let you experience every piece — touch it, feel it, own it with
                confidence.
              </p>
              <p>
                From <span>elegant sofas that define your living room</span> to{" "}
                <span>solid wooden almirahs built to outlast decades</span>,
                every item on our floor is selected for quality, finish, and
                value. No middlemen, no hidden costs — just honest furniture at
                honest prices.
              </p>

              <div className="StoryCardDiv">
                {stats.map((item, index) => (
                  <div key={index} className="stat-card">
                    <h3>
                      {item.icon && <FaStarHalfAlt size={28} className="me-2" />}
                          {mounted ? (
                        <CountUp
                          start={0}
                          end={item.number}
                          duration={2.5}
                          decimals={item.decimals || 0}
                          enableScrollSpy={true}
                          scrollSpyOnce={true}
                        />
                      ) : (
                        <span>{item.number}</span>
                      )}
                      {item.suffix}
                    </h3>
                    <p>{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="RytStoryDiv">
              <div className="story-big">
                <h4>JF</h4>
              </div>
              <div className="StoryListDiv">
                <ul>
                  <li>
                    <IoMdCube /> Widest selection of sofas & seating in
                    Gurdaspur
                  </li>
                  <li>
                    <IoMdCube /> Handcrafted solid wood almirahs & wardrobes
                  </li>
                  <li>
                    <IoMdCube /> Latest designs updated regularly — always fresh
                    stock
                  </li>
                  <li>
                    <IoMdCube /> Trusted by hundreds of families across Punjab
                  </li>
                  <li>
                    <IoMdCube /> Transparent pricing with no compromise on
                    quality
                  </li>
                </ul>
              </div>
              <div className="StoryContactDiv">
                <span>Call Us Anytime</span>
                <div className="Cntlnk">
                  <Link href="tel:09814645550">981464-5550</Link>
                  <p>
                    Tibri Road, Gurdaspur
                    <br />
                    Punjab 143521
                  </p>
                </div>
                <div className="cntme">
                  <h6>
                    <span></span> Open 24 Hours — 7 Days a Week
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <JoinedSocial/>

      <section className="HomeDecorSec">
        <Container fluid className="container-xl">
          <div className="HomeDecureData">
            <div className="LeftDecore">
              <div className="DecureText">
                <span>Home Decor Hub</span>
                <h2>Exceptional Furniture's For Indoor &amp; Outdoor</h2>
                <p>Ut eleifend mattis ligula, porta finibus urna gravida at. Aenean vehicula sodales arcu non mattis. Integer dapibus ac dui pretium blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
              </div>
              <div className="DecureImg">
                <Image src="/Images/HomeDecore1.jpg" alt="HomeDecore1.jpg" width={500} height={500} />
              </div>
            </div>
            <div className="RightDecore">
              <div className="DecureImg">
                <Image src="/Images/HomeDecore2.jpg" alt="HomeDecore2.jpg" width={500} height={500} />
              </div>
              <div className="DecureText">
                <h4>Discover Endless Designs</h4>
                <p>Integer dapibus ac dui pretium blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut eleifend mattis ligula, porta finibus urna gravida at. Aenean vehicula sodales arcu non mattis.</p>
                <ul>
                  <li><IoCheckmarkDoneSharp /> At eleifend mattis ligula, porta finibus urna gvida at.</li>
                  <li><IoCheckmarkDoneSharp /> Kenean vehicula sodales arcu non mattis.</li>
                  <li><IoCheckmarkDoneSharp /> Ginteger dapibus ac dui pretium blanss aptent.</li>
                </ul>

              </div>
            </div>

          </div>
        </Container>
      </section>

      <section className="GallerySec" id="Services">
        <Container fluid className="container-xl">

          <div className="GalleryData">

            <div className="GalleryHeading">
              <span>Our Collection</span>
              <h2>Discover Beautiful Furniture</h2>
              <p> Explore our premium collection of handcrafted furniture designed
                for comfort, elegance, and modern living.</p>
            </div>

            <div className="GalleryFilter">

              <button className={activeCategory === "all" ? "active" : ""} onClick={() => setActiveCategory("all")}>
                All
              </button>

              <button className={activeCategory === "living" ? "active" : ""} onClick={() => setActiveCategory("living")} >
                Living Room
              </button>

              <button className={activeCategory === "bedroom" ? "active" : ""} onClick={() => setActiveCategory("bedroom")} >
                Bedroom
              </button>

              <button className={activeCategory === "dining" ? "active" : ""} onClick={() => setActiveCategory("dining")}>
                Dining
              </button>

              <button className={activeCategory === "office" ? "active" : ""} onClick={() => setActiveCategory("office")}>
                Office
              </button>

              <button className={activeCategory === "outdoor" ? "active" : ""} onClick={() => setActiveCategory("outdoor")} >
                Outdoor
              </button>

            </div>

            <div className="GalleryCardDiv">
              {filteredGallery.map((item) => (
                <div className="ss" key={item.id}>
                  <div className="GalleryItem">
                    <Image src={item.image} alt={item.title} width={380} height={475} priority />
                    <div className="GalleryOverlay">
                      <h4>{item.title}</h4>
                      <span>{item.category}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </Container>
      </section>

      <section className="WhyChooseSec" >
        <Container fluid className="container-xl">
          <div className="section-inner">

            <div className="why-header">
              <div className="lftwhyhead">
                <div className="section-eyebrow">
                  <div className="section-eyebrow-line"></div>
                  <span className="section-eyebrow-text">Why Choose Us</span>
                </div>
                <h2 className="section-title">
                  The Jakria <em>Difference</em>
                </h2>
              </div>
              <p>
                We don't just sell furniture — we help you create a home. Every
                product, every interaction, every delivery is handled with care
                and commitment.
              </p>
            </div>

            <div className="WhyFeatureData">
                <div className="why-features">
                    <div className="why-feature">
                        <div className="why-feature-num">01</div>
                        <div className="why-feature-line"></div>
                        <div className="why-feature-title">
                        Largest Showroom in Gurdaspur
                        </div>
                        <div className="why-feature-body">
                        Walk through our expansive floor and compare hundreds of
                        pieces side by side. See the size, feel the fabric, know
                        exactly what you're buying.
                        </div>
                    </div>
                    <div className="why-feature">
                        <div className="why-feature-num">02</div>
                        <div className="why-feature-line"></div>
                        <div className="why-feature-title">
                        Solid Wood Craftsmanship
                        </div>
                        <div className="why-feature-body">
                        Our wooden almirahs and furniture are made from premium timber
                        with skilled joinery. Built for Punjab's climate, built to
                        last a lifetime.
                        </div>
                    </div>
                    <div className="why-feature">
                        <div className="why-feature-num">03</div>
                        <div className="why-feature-line"></div>
                        <div className="why-feature-title">Open Around the Clock</div>
                        <div className="why-feature-body">
                        We're open 24 hours, 7 days a week. Shop whenever it suits
                        your schedule — morning, evening, or late night. We're always
                        here.
                        </div>
                    </div>
                    <div className="why-feature">
                        <div className="why-feature-num">04</div>
                        <div className="why-feature-line"></div>
                        <div className="why-feature-title">New Stock, Every Season</div>
                        <div className="why-feature-body">
                        Our "Latest Furniture" collection is always being refreshed.
                        Trending designs, contemporary styles, and classic staples —
                        all at Jakria.
                        </div>
                    </div>
                    <div className="why-feature">
                        <div className="why-feature-num">05</div>
                        <div className="why-feature-line"></div>
                        <div className="why-feature-title">Trusted by Families</div>
                        <div className="why-feature-body">
                        Rated 3.7 on JustDial and loved by families across Gurdaspur
                        and surrounding districts. Our reputation is built on repeat
                        customers.
                        </div>
                    </div>
                    <div className="why-feature">
                        <div className="why-feature-num">06</div>
                        <div className="why-feature-line"></div>
                        <div className="why-feature-title">Best Value for Money</div>
                        <div className="why-feature-body">
                        Premium quality doesn't have to break the bank. We offer
                        competitive pricing across all categories — sofas, almirahs,
                        beds, and more.
                        </div>
                    </div>
                </div>
                <div className="why-bottom">
                    <div className="whtfttexted">
                        <h4> "Your home deserves the best — and so do you." </h4>
                        <p> — Jakria Furniture, Gurdaspur</p>
                    </div>
                    <Link href="tel:09814645550">
                        📞 Call: 098146 45550
                    </Link>
                </div>
            </div>

          </div>
        </Container>
      </section>

      <section className="UnlockSec">
        <Container fluid className="container-xl">
          <div className="UnLockData">
            <div className="TopUnlock">
              <div className="left">
                <span>Unlocking the Secret</span>
                <h2>Art of Coziness</h2>
              </div>
              <ComnBtn text="Discover more" href="#" />
            </div>
            <div className="BottomUnlock">
              <div className="ImageDiv">
                <Image
                  src="/Images/living.jpg"
                  alt="living.jpg"
                  width={821}
                  height={903}
                  priority
                />
                <div className="ImageTexed">
                  <h4>Living Room</h4>
                  <p>(Range from $22.99)</p>
                </div>
              </div>
              <div className="RytBtm">
                <div className="ImageDiv">
                  <Image
                    src="/Images/kitchen.jpg"
                    alt="kitchen.jpg"
                    width={798}
                    height={452}
                    priority
                  />
                  <div className="ImageTexed">
                    <h4>Kitchen</h4>
                    <p>(Range from $28.99)</p>
                  </div>
                </div>
                <div className="SubBtm">
                  <div className="ImageDiv">
                    <Image
                      src="/Images/dinning.jpg"
                      alt="dinning.jpg"
                      width={389}
                      height={457}
                      priority
                    />
                    <div className="ImageTexed">
                      <h4>Dinning</h4>
                      <p>(Range from $50.99)</p>
                    </div>
                  </div>
                  <div className="ImageDiv">
                    <Image
                      src="/Images/study.jpg"
                      alt="study.jpg"
                      width={389}
                      height={457}
                      priority
                    />
                    <div className="ImageTexed">
                      <h4>Study Room</h4>
                      <p>(Range from $22.99)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="TeamsSec" id="#Team">
        <Container fluid className="container-xl">
          <div className="TeamsData">
            <div className="TeamHead">
              <span>Comfort Crafters</span>
              <h2>Special Team</h2>
            </div>
            <div className="TeamsCardDiv">
              {teamData.map((member) => (
                <div className="TeamItemDiv" key={member.id}>
                  <div className="TeamImage">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={380}
                      height={475}
                      priority
                    />
                    <div className="TeamSocial">
                      {member.social.map((item) => (
                        <Link href={item.link} key={item.id}>
                          {item.icon}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="TeamInfo">
                    <h4>{member.name}</h4>
                    <p>{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="NextGenSection">
        <Container fluid className="container-xl">
          <div className="NextGenData">
            <div>
              <VideoButton />
            </div>
            <h2>Next-Generation Design</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <ComnBtn text="View all products" href="#" />
          </div>
        </Container>
        <div className="GenrationCount" key={statsRefreshKey}>
          {generationStats.map((item) => (
            <div className="GenCountItem" key={item.id}>
              <h4>
                {mounted ? (
                  <CountUp
                    key={`${item.id}-${statsRefreshKey}`}
                    start={0}
                    end={item.value}
                    duration={2.5}
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                  />
                ) : (
                  <span>{item.value}</span>
                )}
                {item.suffix}
              </h4>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default HomePage;

export function JoinedSocial() {
  return <section className="SocialSec">
    <Container fluid className="container-xl">
      <div className="SocialLinkData">
        <div className="top">
          <div className="left">
            <h2>Join Us On Social</h2>
            <p>
              Tincidunt vitae semper quis lectus. Pretium vulputate sapien
              nec sagittis aliquam malesuada. Dignissim enim sit amet
              venenatis.Interdum velit laoreet id donec ultrices tincidunt
              arcu.
            </p>
            <Link href="">
              <IoShareSocialSharp /> Follow now
            </Link>
          </div>
          <div className="Right">
            <Link href="#">#Furniture</Link>
            <Link href="#">#Decoration</Link>
            <Link href="#">#Interior</Link>
            <Link href="#">#Outdoor</Link>
            <Link href="#">#Kitchen</Link>
            <Link href="#">#Living room</Link>
            <Link href="#">#Bars</Link>
            <Link href="#">#Lounges</Link>
            <Link href="#">#Hospitals</Link>
          </div>
        </div>
        <div className="Bottom">
          <Link href="#">
            <div className="SoclImg">
              <Image src="/Images/social1.jpg" alt="social1.jpg" width={248} height={248} />
              <div className="IconDiv">
                <FaFacebook />
              </div>
            </div>
            <h6>@djkdkjd</h6>
          </Link>
          <Link href="#">
            <div className="SoclImg">
              <Image src="/Images/social2.jpg" alt="social2.jpg" width={248} height={248} />
              <div className="IconDiv">
                <FaInstagramSquare />
              </div>
            </div>
            <h6>@djkdkjd</h6>
          </Link>
          <Link href="#">
            <div className="SoclImg">
              <Image src="/Images/social2.jpg" alt="social2.jpg" width={248} height={248} />
              <div className="IconDiv">
                <FaWhatsapp />
              </div>
            </div>
            <h6>@djkdkjd</h6>
          </Link>
          <Link href="#">
            <div className="SoclImg">
              <Image src="/Images/social2.jpg" alt="social2.jpg" width={248} height={248} />
              <div className="IconDiv">
                <FaLinkedin />
              </div>
            </div>
            <h6>@djkdkjd</h6>
          </Link>
        </div>
      </div>
    </Container>
  </section>;
}

export function ComnBtn({ href, text }) {
  return (
    <div className="ComonBtn">
      <Link href={href}>
        {text}{" "}
        <span>
          <FaArrowRight />
        </span>
      </Link>
    </div>
  );
}

export function VideoButton() {
  useEffect(() => {
    let lightbox;
    import("glightbox").then(({ default: GLightbox }) => {
      lightbox = GLightbox({
        selector: ".glightbox-video",
        autoplayVideos: true,
      });
    });
    return () => {
      if (lightbox) lightbox.destroy();
    };
  }, []);
  const text = " PLAY VIDEO • PLAY VIDEO • ";
  return (
    <a
      href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      className="videoBtn glightbox-video" >
      <svg className="circleText" viewBox="0 0 200 200">
        <defs>
          <path
            id="circlePath"
            d="M100,100 m-65,0 a65,65 0 1,1 130,0 a65,65 0 1,1 -130,0"
          />
        </defs>
        <text>
          <textPath href="#circlePath">
            {text.repeat(3)}
          </textPath>
        </text>
      </svg>
      <div className="playIcon">
        <FaPlay />
      </div>
    </a>
  );
}
