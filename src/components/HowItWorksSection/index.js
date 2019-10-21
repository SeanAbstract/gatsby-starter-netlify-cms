import React from 'react'

import PreviewCompatibleImage from '../PreviewCompatibleImage'
import Content from '../Content'

function HowItWorksSection(props) {
  const PostContent = props.contentComponent || Content

  return props.sections.map((section, ndx) => (
    <div className="col-md-8 mx-auto">
      <div className="row w-100 mb-5 justify-content-center align-items-center">
        {ndx % 2 === 0 ? (
          <>
            <div className="col-md-8">
              <h3>{section.title}</h3>
              <PostContent content={section.body} />
            </div>
            <div className="col-md-4">
              <PreviewCompatibleImage
                imageInfo={section.image}
                alt="section image"
                style={{maxWidth: '150px'}}
              />
            </div>
          </>
        ) : (
          <>
            <div className="col-md-4">
              <PreviewCompatibleImage
                imageInfo={section.image}
                alt="section image"
                style={{maxWidth: '250px'}}
              />
            </div>
            <div className="col-md-8">
              <h3>{section.title}</h3>
              <PostContent content={section.body} />
            </div>
          </>
        )}
      </div>
    </div>
  ))
}

export default HowItWorksSection
