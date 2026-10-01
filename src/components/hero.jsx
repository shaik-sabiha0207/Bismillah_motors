import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import {
  Phone,
  CheckCircle,
  Wrench,
  Star,
  ShieldCheck,
} from "lucide-react";

import hero1 from "../assets/images/1L.png";
import hero2 from "../assets/images/2L.jpg";
import ServicesPreview from "./ServicesPreview";
import "../styles/hero.css";

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Two hero images
  const slides = [hero1, hero2];

  // Change image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="hero-section">

      {/* =====================================
          MAIN HERO
      ===================================== */}

      <div className="hero">

        {/* Background Images */}
        <div className="hero-slides">
          {slides.map((image, index) => (
            <div
              key={index}
              className={`hero-slide ${
                index === currentSlide ? "active" : ""
              }`}
              style={{
                backgroundImage: `url(${image})`,
              }}
            />
          ))}
        </div>

        {/* Dark Overlay */}
        <div className="hero-overlay"></div>

        {/* =====================================
            HERO CONTENT
        ===================================== */}

        <div className="hero-content">

          {/* Brand */}
          <div className="navbar-brand-text">
      <span className="brand-bismillah">BISMILLAH</span>
      <span className="brand-motors"> MOTORS</span>
      </div>

          {/* Main Heading */}
          <h1 className="hero-small-title">
            Your Car,
            <br />
            <span>Our Priority</span>
          </h1>

          {/* Description */}
          <p className="hero-description">
            Professional Automotive Repair & Maintenance
            Services in Guntur
          </p>

          {/* Buttons */}
          <div className="hero-buttons">

            <Link
              to="/booking"
              className="hero-book-button"
            >
              Book a Service
            </Link>

            <a
              href="tel:+91XXXXXXXXXX"
              className="hero-call-button"
            >
              <Phone size={17} />
              <span>Call Now</span>
            </a>

          </div>

        </div>

        {/* Slide Indicators */}
        <div className="hero-indicators">

          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={
                index === currentSlide
                  ? "hero-indicator active"
                  : "hero-indicator"
              }
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}

        </div>

      </div>


      {/* =====================================
          SEPARATE SERVICE BENEFITS BAR
      ===================================== */}

      <div className="hero-benefits">

        {/* Expert Technicians */}
        <div className="hero-benefit">

          <div className="benefit-icon">
            <Wrench size={22} />
          </div>

          <div className="benefit-content">
            <span className="benefit-title">
              Expert Technicians
            </span>

            <span className="benefit-text">
              Skilled & Experienced
            </span>
          </div>

        </div>


        {/* Quality Service */}
        <div className="hero-benefit">

          <div className="benefit-icon">
            <CheckCircle size={22} />
          </div>

          <div className="benefit-content">
            <span className="benefit-title">
              Quality Service
            </span>

            <span className="benefit-text">
              Professional Work
            </span>
          </div>

        </div>


        {/* Affordable Pricing */}
        <div className="hero-benefit">

          <div className="benefit-icon">
            <ShieldCheck size={22} />
          </div>

          <div className="benefit-content">
            <span className="benefit-title">
              Affordable Pricing
            </span>

            <span className="benefit-text">
              Fair & Transparent
            </span>
          </div>

        </div>


        {/* Customer Satisfaction */}
        <div className="hero-benefit">

          <div className="benefit-icon">
            <Star size={22} />
          </div>

          <div className="benefit-content">
            <span className="benefit-title">
              Customer Satisfaction
            </span>

            <span className="benefit-text">
              Your Trust Matters
            </span>
          </div>

        </div>

      </div>
  <ServicesPreview />
    </section>
  );
}

export default Hero;