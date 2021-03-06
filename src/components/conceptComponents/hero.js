import React from 'react'

const Hero = ({ hero, surveyUrl }) => {
  const { title, text, cta, image } = hero[0]
  return (
    <section className="mzp-c-hero mzp-has-image mzp-t-product-firefox">
      <div className="mzp-l-content">
        <div className="mzp-c-hero-body">
          <h1 className="mzp-c-hero-title">{title}</h1>
          <div className="mzp-c-hero-desc">
            <p>{text}</p>
          </div>
          <p className="mzp-c-hero-cta">
            <a
              className="mzp-c-button mzp-t-download mzp-t-firefox mzp-t-product-firefox"
              href={surveyUrl}
            >
              {cta}
            </a>
          </p>
        </div>
      </div>
      <div className="mzp-c-hero-image">
        <img
          src={image.publicURL}
          alt={title}
        />
      </div>
    </section>
  )
}

export default Hero
