import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import HowItWorksPagePreview from './preview-templates/HowItWorksPagePreview'
import FaqsPagePreview from './preview-templates/FaqsPagePreview'
import PricePagePreview from './preview-templates/PricePagePreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerPreviewTemplate('how-it-works', HowItWorksPagePreview)
CMS.registerPreviewTemplate('faq', FaqsPagePreview)
CMS.registerPreviewTemplate('price', PricePagePreview)
