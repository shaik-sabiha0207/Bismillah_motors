import React from "react";
import { Link } from "react-router-dom";
import {
  Wrench,
  BadgeCheck,
  ShieldCheck,
  Star,
} from "lucide-react";

import carService from "../assets/images/carservice.jpeg";
import lining from "../assets/images/lining.png";
import denting from "../assets/images/denting.png";
import painting from "../assets/images/painting.png";
import generalRepair from "../assets/images/genearlrepairs.png";

import "../styles/services-preview.css";

function ServicesPreview() {
  const services = [
    {
      title: "Denting",
      description: "Restore dents & original body shape",
      image: denting,
    },
    {
      title: "Painting",
      description: "Premium paint & smooth finish",
      image: painting,
    },
    {
      title: "Lining",
      description: "Professional lining & finishing work",
      image: lining,
    },
    {
      title: "Car Service",
      description: "Complete vehicle servicing & maintenance",
      image: carService,
    },
    {
      title: "General Repairs",
      description: "Reliable repairs for all car needs",
      image: generalRepair,
    },
  ];

  return (
    <section className="services-preview-section">

      {/* =====================================================
          SERVICES
      ====================================================== */}

      <div className="services-preview-container">

        {/* SECTION HEADING */}
        <div className="services-preview-heading">
          <h2>Our Services</h2>
          <p>Complete car care under one roof</p>
        </div>


        {/* SERVICES GRID */}
        <div className="services-preview-grid">

          {services.map((service) => (
            <Link
              key={service.title}
              to="/services"
              className="service-preview-card"
            >

              {/* SERVICE IMAGE */}
              <div className="service-preview-image">

                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                />

                <div className="service-preview-image-overlay"></div>

              </div>


              {/* SERVICE CONTENT */}
              <div className="service-preview-content">

                <h3>{service.title}</h3>

                <p>{service.description}</p>

              </div>

            </Link>
          ))}

        </div>


        {/* VIEW ALL SERVICES BUTTON */}
        <div className="services-preview-button-wrapper">

          <Link
            to="/services"
            className="services-preview-button"
          >
            View All Services
          </Link>

        </div>

      </div>


      {/* =====================================================
          WHY CHOOSE BISMILLAH MOTORS
      ====================================================== */}

      <div className="preview-why-section">

        <div className="preview-why-container">

          {/* HEADING */}
          <h2>Why Choose Bismillah Motors?</h2>


          {/* WHY CHOOSE GRID */}
          <div className="preview-why-grid">


            {/* =================================================
                EXPERT TECHNICIANS
            ================================================== */}

            <div className="preview-why-item">

              <div className="preview-why-icon">
                <Wrench
                  size={21}
                  strokeWidth={2}
                />
              </div>

              <div className="preview-why-content">

                <strong>
                  Expert Technicians
                </strong>

                <span>
                  Skilled &amp; Experienced
                </span>

              </div>

            </div>


            {/* =================================================
                QUALITY WORK
            ================================================== */}

            <div className="preview-why-item">

              <div className="preview-why-icon">
                <BadgeCheck
                  size={21}
                  strokeWidth={2}
                />
              </div>

              <div className="preview-why-content">

                <strong>
                  Quality Work
                </strong>

                <span>
                  Professional Workmanship
                </span>

              </div>

            </div>


            {/* =================================================
                RELIABLE SERVICE
            ================================================== */}

            <div className="preview-why-item">

              <div className="preview-why-icon">
                <ShieldCheck
                  size={21}
                  strokeWidth={2}
                />
              </div>

              <div className="preview-why-content">

                <strong>
                  Reliable Service
                </strong>

                <span>
                  Fair &amp; Transparent
                </span>

              </div>

            </div>


            {/* =================================================
                CUSTOMER TRUST
            ================================================== */}

            <div className="preview-why-item">

              <div className="preview-why-icon">
                <Star
                  size={21}
                  strokeWidth={2}
                />
              </div>

              <div className="preview-why-content">

                <strong>
                  Customer Trust
                </strong>

                <span>
                  Your Satisfaction Matters
                </span>

              </div>

            </div>


          </div>

        </div>

      </div>

    </section>
  );
}

export default ServicesPreview;