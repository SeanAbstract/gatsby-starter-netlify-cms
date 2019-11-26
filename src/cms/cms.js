import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import HowItWorksPagePreview from './preview-templates/HowItWorksPagePreview'
import FaqsPagePreview from './preview-templates/FaqsPagePreview'
import PricePagePreview from './preview-templates/PricePagePreview'
import ContactPagePreview from './preview-templates/ContactPagePreview'
import TermsPagePreview from './preview-templates/TermsPagePreview'
import PrivacyPagePreview from './preview-templates/PrivacyPagePreview'
import RiskPagePreview from './preview-templates/RiskPagePreview'
import ThankYouPagePreview from './preview-templates/ThankYouPagePreview'

import USStocksPagePreview from './preview-templates/PricingPages/USStocksPagePreview'
import USStockOptionsPagePreview from './preview-templates/PricingPages/USStockOptionsPagePreview'
import HKWarrantsCBBCSPagePreview from './preview-templates/PricingPages/HKWarrantsCBBCSPagePreview'
import ShanghaiShenzhenStocksPagePreview from './preview-templates/PricingPages/ShanghaiShenzhenStocksPagePreview'
import HKStocksPagePreview from './preview-templates/PricingPages/HKStocksPagePreview'
import HKStockOptionsPagePreview from './preview-templates/PricingPages/HKStockOptionsPagePreview'
import FinancingInterestRatesPagePreview from './preview-templates/PricingPages/FinancingInterestRatesPagePreview'


CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerPreviewTemplate('how-it-works', HowItWorksPagePreview)
CMS.registerPreviewTemplate('faq', FaqsPagePreview)
CMS.registerPreviewTemplate('price', PricePagePreview)
CMS.registerPreviewTemplate('contact', ContactPagePreview)
CMS.registerPreviewTemplate('terms', TermsPagePreview)
CMS.registerPreviewTemplate('privacy-policy', PrivacyPagePreview)
CMS.registerPreviewTemplate('risk-disclosure', RiskPagePreview)
CMS.registerPreviewTemplate('thank-you', ThankYouPagePreview)

CMS.registerPreviewTemplate('us-stocks', USStocksPagePreview)
CMS.registerPreviewTemplate('us-stock-options', USStockOptionsPagePreview)
CMS.registerPreviewTemplate('hk-warrants-cbbcs', HKWarrantsCBBCSPagePreview)
CMS.registerPreviewTemplate('shanghai-shenzhen-stocks', ShanghaiShenzhenStocksPagePreview)
CMS.registerPreviewTemplate('hk-stocks', HKStocksPagePreview)
CMS.registerPreviewTemplate('hk-stock-options', HKStockOptionsPagePreview)
CMS.registerPreviewTemplate('financing-interest-rates', FinancingInterestRatesPagePreview)