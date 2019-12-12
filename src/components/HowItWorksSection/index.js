import React from 'react'
import * as showdown from 'showdown'

import './styles.scss'
import PreviewCompatibleImage from '../PreviewCompatibleImage'

function HowItWorksSection(props) {
  return props.sections.map((section, ndx) => {
    const converter = new showdown.Converter()
    const html = converter.makeHtml(section.body)

    return (
      <div className="col-md-9 mx-auto mb-5 hiw-section">
        <div className="container h-100">
          <div className="row w-100 justify-content-center align-items-center d-none d-md-flex text-center text-sm-left">
            {ndx % 2 === 0 ? (
              <>
                <div className="col-md-8">
                  <h3>{section.title}</h3>
                  <div dangerouslySetInnerHTML={{__html: html}} />
                  <div className="text-left">
                    {ndx === 0 && (
                      <button className="btn btn-outline-primary rounded-pill " type="button">
                        Download App
                      </button>
                    )}
                  </div>
                </div>
                <div className="col-md-4">
                  <PreviewCompatibleImage
                    imageInfo={section.image}
                    alt="section image"
                    style={{maxWidth: '200px', objectFit: 'contain', height: '150px'}}
                  />
                </div>
              </>
            ) : (
              <>
                <div className="col-md-4 text-center ">
                  <PreviewCompatibleImage
                    imageInfo={section.image}
                    alt="section image"
                    style={{maxWidth: '200px', objectFit: 'contain'}}
                    className="section-img"
                  />
                </div>
                <div className="col-md-8">
                  <h3>{section.title}</h3>
                  <div dangerouslySetInnerHTML={{__html: html}} />
                </div>
              </>
            )}
          </div>
          <div className="row w-100 justify-content-center align-items-center d-md-none text-center text-sm-left">
            <>
              <div className="col-md-4 text-center text-sm-left img-container">
                <PreviewCompatibleImage
                  imageInfo={section.image}
                  alt="section image"
                  style={{
                    maxWidth: '150px',
                    marginBottom: '3.5rem',
                    height: '150px',
                    objectFit: 'contain',
                  }}
                  className="section-img"
                />
              </div>
              <div className="col-md-8">
                <h3>{section.title}</h3>
                <div dangerouslySetInnerHTML={{__html: html}} />
                {ndx === 0 && (
                  <button className="btn btn-outline-primary rounded-pill " type="button">
                    Download App
                  </button>
                )}
              </div>
            </>
          </div>
        </div>
      </div>
    )
  })
}

export default HowItWorksSection
