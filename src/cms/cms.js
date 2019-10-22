import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import HowItWorksPagePreview from './preview-templates/HowItWorksPagePreview'
import FaqsPagePreview from './preview-templates/FaqsPagePreview'
import PricePagePreview from './preview-templates/PricePagePreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('/en/index', IndexPagePreview)
CMS.registerPreviewTemplate('/en/about', AboutPagePreview)
CMS.registerPreviewTemplate('/en/products', ProductPagePreview)
CMS.registerPreviewTemplate('/en/blog', BlogPostPreview)
CMS.registerPreviewTemplate('/en/how-it-works', HowItWorksPagePreview)
CMS.registerPreviewTemplate('/en/faq', FaqsPagePreview)
CMS.registerPreviewTemplate('/en/price', PricePagePreview)

CMS.registerPreviewTemplate('/zh/index', IndexPagePreview)
CMS.registerPreviewTemplate('/zh/about', AboutPagePreview)
CMS.registerPreviewTemplate('/zh/products', ProductPagePreview)
CMS.registerPreviewTemplate('/zh/blog', BlogPostPreview)
CMS.registerPreviewTemplate('/zh/how-it-works', HowItWorksPagePreview)
CMS.registerPreviewTemplate('/zh/faq', FaqsPagePreview)
CMS.registerPreviewTemplate('/zh/price', PricePagePreview)
