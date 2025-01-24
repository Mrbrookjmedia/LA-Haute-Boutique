import React from "react";
import "../styles/About.css";

import img1 from "../assets/images/pexels-darina-belonogova-7541666.jpg";
import img2 from "../assets/images/high-quality.png";
import img3 from "../assets/images/ethics.png";
import img4 from "../assets/images/waste.png";
import img5 from "../assets/images/image5.png";
import img6 from "../assets/images/image6.png";
import img7 from "../assets/images/image7.png";
import img8 from "../assets/images/image8.png";

function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="image-x">
        <img src={img1} alt="about" className="animated-img" />
        <div className="hero-overlay">
          <h1 className="hero-text">Redefining Luxury with Sustainability and Style</h1>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-us">
        <h1 className="section-title">
          <span className="title-highlight">Premium Clothing</span> Online Across the World
        </h1>
        <h5 className="sub-title">Who We Are</h5>
        <p className="section-description">
          <span className="text-blue-900">At La Haute Boutique</span>, we celebrate the artistry of fashion and the
          elegance of timeless design. From humble beginnings to becoming a
          name recognized worldwide, our journey has been defined by a passion
          for luxury, a commitment to innovation, and a belief in creating a
          better world through sustainable practices.
        </p>

        <h2 className="sub-title">Our Core Values</h2>
        <div className="core-values">
          <div className="card">
            <img src={img2} alt="High Quality" />
            <h3>Exceptional Quality</h3>
            <p>
              Our products are crafted with the finest materials and attention
              to detail.
            </p>
          </div>
          <div className="card">
            <img src={img3} alt="Ethics" />
            <h3>Ethical Practices</h3>
            <p>
              We are committed to ethical practices and fair wages for all our
              artisans.
            </p>
          </div>
          <div className="card">
            <img src={img4} alt="Zero Waste" />
            <h3>Timeless Design</h3>
            <p>
              Our sustainable practices ensure minimal waste and a greener
              planet.
            </p>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="part3">
        <h1 className="section-title">Our Commitment to Sustainability</h1>
        <p className="section-description">
          Sustainability is woven into the fabric of everything we do. We
          prioritize responsibly sourced materials, partner with eco-conscious
          brands, and continuously innovate to minimize our carbon footprint.
          Our vision is to inspire mindful fashion choices without compromising
          luxury.
        </p>
        <div className="sustainability-image">
          <img src={img5} alt="Sustainability Commitment" />
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="part4">
        <h1 className="section-title">What We Offer</h1>
        <div className="core-values">
          <div className="card offer-card-ha">
            <img src={img6} alt="Premium Quality Materials" />
            <h3>Premium Quality Materials</h3>
            <p>
              Our products are crafted with the finest materials and attention
              to detail.
            </p>
          </div>
          <div className="card offer-card-ha">
            <img src={img7} alt="Responsibly Sourced Collections" />
            <h3>Responsibly Sourced Collections</h3>
            <p>
              We are committed to ethical practices and fair wages for all our
              artisans.
            </p>
          </div>
          <div className="card offer-card-ha">
            <img src={img8} alt="Luxury with a Sustainable Heart" />
            <h3>Luxury with a Sustainable Heart</h3>
            <p>
              Our sustainable practices ensure minimal waste and a greener
              planet.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Button */}
      <section className="cta-section">
        <button className="cta-button">Explore Our Collection</button>
      </section>
    </>
  );
}

export default About;
