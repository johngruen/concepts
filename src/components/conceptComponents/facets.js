import React from 'react'

const Facets = ({ facets }) => (
  <>
    {facets.map((facet, index) => {
      const flipClass =
        index % 2 === 0 ? 'mzp-l-billboard-right' : 'mzp-l-billboard-left'
      const flipColor = index % 2 === 0 ? '#ededf0' : 'white'
      return (
        <div class={`mzp-c-billboard ${flipClass}`} style={{background: flipColor}}>
          <div class="mzp-c-billboard-image-container">
            <img
              height="346"
              width="346"
              class="mzp-c-billboard-image"
              src={facet.image.publicURL}
              alt={facet.title}
            />
          </div>
          <div class="mzp-c-billboard-content">
            <div class="mzp-c-billboard-content-container">
              <div class="mzp-c-billboard-content-inner">
                <h2 class="mzp-c-billboard-title">{facet.title}</h2>
                <p class="mzp-c-billboard-desc">{facet.text}</p>
              </div>
            </div>
          </div>
        </div>
      )
    })}
  </>
)

export default Facets
