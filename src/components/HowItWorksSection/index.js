import React, {useEffect} from 'react'
import * as showdown from 'showdown'

import PreviewCompatibleImage from '../PreviewCompatibleImage'
import Content from '../Content'

function HowItWorksSection(props) {
  const PostContent = props.contentComponent || Content

  return props.sections.map((section, ndx) => {
    const converter = new showdown.Converter()
    const html = converter.makeHtml(section.body)

    return (
      <div className="col-md-8 mx-auto mb-5">
        <div className="row w-100 justify-content-center align-items-center">
          {ndx % 2 === 0 ? (
            <>
              <div className="col-md-8">
                <h3>{section.title}</h3>
                <PostContent content={html} />
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
                <PostContent content={html} />
              </div>
            </>
          )}
        </div>
      </div>
    )
  })
}

export default HowItWorksSection
