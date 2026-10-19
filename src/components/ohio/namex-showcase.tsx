"use client";

import { useState } from "react";
import Image from "next/image";
import { clientConfig } from "./client-config";
import { whatsapp } from "./rebuild-data";
import { ArrowUpRight, WhatsAppMark } from "./icons";

interface NamexProduct {
  id: string;
  name: string;
  code: string;
  tagline: string;
  image: string;
  alt: string;
  spec: string;
  finish: string;
  durability: string;
  highlights: string[];
  description: string;
}

const namexProducts: NamexProduct[] = [
  {
    "id": "ceramic-kit",
    "name": "NameX Ceramic Kit",
    "code": "CERAMIC",
    "tagline": "Coating presentation kit",
    "image": "/images/namex-ceramic-kit.jpg",
    "alt": "NameX Ceramic Matrix kit with bottle, applicator and cloth",
    "spec": "Confirm current kit contents and pack size",
    "finish": "Discuss the finish with the studio",
    "durability": "See selected package and written terms",
    "highlights": [
      "Explore Ceramic coating packages",
      "Confirm suitability for your vehicle",
      "Follow product-specific aftercare"
    ],
    "description": "Explore the NameX Ceramic presentation kit. Discuss the selected coating, application and care requirements with the studio."
  },
  {
    "id": "graphene-borophene",
    "name": "NameX Graphene & Borophene",
    "code": "COATINGS",
    "tagline": "Two coating collections",
    "image": "/images/namex-graphene-borophene-kit.jpg",
    "alt": "NameX Graphene and Borophene boxed coating kits",
    "spec": "Confirm product and pack details with the studio",
    "finish": "Compare the coating collections",
    "durability": "See selected package and written terms",
    "highlights": [
      "Graphene collection",
      "Borophene collection",
      "Product-specific application and care"
    ],
    "description": "Graphene and Borophene presentation kits from the supplied photographs. Compare catalogue packages before choosing a treatment."
  },
  {
    "id": "coatings-trio",
    "name": "NameX Coating Collection",
    "code": "COLLECTION",
    "tagline": "Ceramic · Graphene · Borophene",
    "image": "/images/namex-bottles-trio.jpg",
    "alt": "NameX Ceramic, Graphene and Borophene bottle lineup",
    "spec": "Product details confirmed by the studio",
    "finish": "Choose around your vehicle and care preferences",
    "durability": "See selected package and written terms",
    "highlights": [
      "Ceramic",
      "Graphene",
      "Borophene"
    ],
    "description": "The three coating families, shown using the supplied product photograph. Confirm the selected product, preparation and maintenance with the studio."
  },
  {
    "id": "ppf-boxes",
    "name": "NameX Film Collection",
    "code": "PPF",
    "tagline": "Paint protection film",
    "image": "/images/namex-ppf-boxes.jpg",
    "alt": "NameX paint protection film packaging",
    "spec": "Confirm selected film and coverage",
    "finish": "Compare real finish samples with the studio",
    "durability": "Refer to the installed product’s written warranty",
    "highlights": [
      "Discuss the areas to cover",
      "Review material and finish samples",
      "Confirm installation scope and aftercare"
    ],
    "description": "NameX paint protection film packaging from the supplied studio images. Ask the team about suitable film, coverage and finish options."
  },
  {
    "id": "ppf-trio",
    "name": "NameX Film Presentation",
    "code": "FILM",
    "tagline": "The NameX film collection",
    "image": "/images/namex-ppf-trio.png",
    "alt": "Three NameX paint protection film boxes on a white background",
    "spec": "Confirm film specifications with the studio",
    "finish": "Discuss the intended appearance",
    "durability": "Refer to the selected product’s written terms",
    "highlights": [
      "Original product packaging",
      "Vehicle-specific coverage discussion",
      "Product-specific maintenance guidance"
    ],
    "description": "The supplied NameX film presentation photograph. Product availability and the final installation plan are confirmed by the studio."
  }
];

export function NamexShowcase() {
  const [activeProductId, setActiveProductId] = useState<string>("ceramic-kit");
  const [selectedFinish, setSelectedFinish] = useState<string>("Gloss");

  const activeProduct = namexProducts.find(p => p.id === activeProductId) || namexProducts[0];

  const enquiryMessage = encodeURIComponent(
    `Hello MR. DETAILER,\n\nI would like to enquire about NameX surface science:\n- Product: ${activeProduct.name} (${activeProduct.code})\n- Finish Study Interest: ${selectedFinish}\n\nPlease share suitability and studio application availability.`
  );

  return (
    <div className="namex-showcase">
      {/* Brand Header */}
      <div className="namex-header">
        <div className="namex-brand-lockup">
          <div className="client-namex-logo-wrap">
            <Image
              className="client-namex-logo client-namex-logo-dark"
              src={clientConfig.namexLogoDark}
              alt="NameX"
              width={220}
              height={70}
              style={{ width: "auto", height: "42px", objectFit: "contain" }}
            />
            <Image
              className="client-namex-logo client-namex-logo-light"
              src={clientConfig.namexLogoLight}
              alt="NameX"
              width={220}
              height={70}
              style={{ width: "auto", height: "42px", objectFit: "contain" }}
            />
          </div>
          <span className="namex-byline">SURFACE SCIENCE · BY MR. DETAILER</span>
        </div>

        <div className="namex-discipline-pills">
          <span className="namex-pill">PPF</span>
          <span className="namex-pill-dot">·</span>
          <span className="namex-pill">CERAMIC</span>
          <span className="namex-pill-dot">·</span>
          <span className="namex-pill">GRAPHENE</span>
          <span className="namex-pill-dot">·</span>
          <span className="namex-pill">BOROPHENE</span>
        </div>
      </div>

      {/* Main Product Showcase Grid */}
      <div className="namex-showcase-grid">
        {/* Product Visual Mat */}
        <div className="namex-visual-mat">
          <div className="namex-image-wrapper">
            <Image
              src={activeProduct.image}
              alt={activeProduct.alt}
              fill
              sizes="(max-width: 768px) 100vw, 55vw"
              style={{ objectFit: "contain" }}
              priority
            />
          </div>

          <div className="namex-visual-caption">
            <div className="namex-code-badge">{activeProduct.code}</div>
            <span className="namex-caption-text">{activeProduct.tagline}</span>
          </div>
        </div>

        {/* Product Specs & Selection */}
        <div className="namex-info-panel">
          <div className="namex-tabs" role="tablist" aria-label="NameX Products">
            {namexProducts.map(p => (
              <button
                key={p.id}
                type="button"
                role="tab"
                aria-selected={activeProductId === p.id}
                className={`namex-tab-btn ${activeProductId === p.id ? "is-active" : ""}`}
                onClick={() => setActiveProductId(p.id)}
              >
                <span className="namex-tab-code">{p.code}</span>
                <span className="namex-tab-label">{p.name.replace("NameX ", "")}</span>
              </button>
            ))}
          </div>

          <div className="namex-product-body">
            <h3 className="namex-product-title">{activeProduct.name}</h3>
            <p className="namex-product-desc">{activeProduct.description}</p>

            <div className="namex-spec-grid">
              <div className="namex-spec-item">
                <span className="namex-spec-label">SPECIFICATION</span>
                <span className="namex-spec-val">{activeProduct.spec}</span>
              </div>
              <div className="namex-spec-item">
                <span className="namex-spec-label">OPTICAL FINISH</span>
                <span className="namex-spec-val">{activeProduct.finish}</span>
              </div>
              <div className="namex-spec-item">
                <span className="namex-spec-label">PACKAGE TERMS</span>
                <span className="namex-spec-val">{activeProduct.durability}</span>
              </div>
            </div>

            <div className="namex-highlights">
              <span className="namex-spec-label">DISCUSS WITH THE STUDIO</span>
              <ul>
                {activeProduct.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>

            {/* Interactive Finish Study Selector */}
            <div className="namex-finish-study">
              <div className="namex-finish-header">
                <span className="namex-spec-label">FINISH STUDY · MOVE THROUGH THE POSSIBILITIES</span>
                <span className="namex-finish-active">{selectedFinish} Finish</span>
              </div>
              <div className="namex-finish-pills">
                {["Gloss", "Matte", "Black", "Colour"].map(finish => (
                  <button
                    key={finish}
                    type="button"
                    className={`namex-finish-btn ${selectedFinish === finish ? "is-active" : ""}`}
                    onClick={() => setSelectedFinish(finish)}
                  >
                    {finish}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="namex-actions">
              <a
                href={`${whatsapp}?text=${enquiryMessage}`}
                target="_blank"
                rel="noreferrer"
                className="namex-cta-btn"
              >
                <WhatsAppMark />
                <span>Enquire About {activeProduct.code}</span>
                <ArrowUpRight className="namex-btn-arrow" />
              </a>

              {clientConfig.namexUrl && (
                <a
                  href={clientConfig.namexUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="namex-secondary-link"
                >
                  <span>Explore NameX Global</span>
                  <ArrowUpRight className="namex-btn-arrow" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Three Pillar Journey */}
      <div className="namex-journey-bar">
        <div className="namex-journey-step">
          <span className="namex-step-num">01</span>
          <div>
            <strong>FIND YOUR FINISH</strong>
            <p>Compare physical finish samples and discuss suitable options.</p>
          </div>
        </div>
        <div className="namex-journey-step">
          <span className="namex-step-num">02</span>
          <div>
            <strong>KNOW YOUR PROTECTION</strong>
            <p>Compare the selected film or coating, coverage and written product terms.</p>
          </div>
        </div>
        <div className="namex-journey-step">
          <span className="namex-step-num">03</span>
          <div>
            <strong>CARE FOR THE RESULT</strong>
            <p>Follow the product-specific care instructions and written maintenance schedule.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
