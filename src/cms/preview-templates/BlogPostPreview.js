import React from 'react'
import PropTypes from 'prop-types'

import {BlogPostPageTemplate} from '../../templates/blog-post'

const BlogPostPreview = ({entry, widgetFor}) => {
  const data = entry.getIn(['data']).toJS()

  return (
    <BlogPostPageTemplate
      content={widgetFor('body')}
      description={data.description || []}
      title={data.title || []}
      downloadNow={data.downloadNow || {}}
      featuredImage={data.featuredimage}
      footerLinks={data.footerLinks || {}}
    />
  )
}

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default BlogPostPreview
