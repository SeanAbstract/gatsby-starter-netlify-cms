import React from 'react'
import styled from 'styled-components'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  Dropdown,
} from 'reactstrap'
import {Link} from 'gatsby'

import './styles.scss'
import whiteLogo from '../../img/snowball-logo-white.png'
import logo from '../../img/snowball-logo-blue.png'
import logoIcon from '../../../static/img/snowball-logo-x.png'
import whiteLogoIcon from '../../img/logo-icon.png'
import facebookIcon from '../../../static/img/facebook_blue.png'
import linkedinIcon from '../../../static/img/linkedin_blue.png'
import twitterIcon from '../../../static/img/twitter_blue.png'
import wechatIcon from '../../../static/img/wechat_blue.png'

// import logoIcon from '../../images/icon-snowball-logo-blue.png'

const data = [
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'How It Works',
    href: '/how-it-works',
  },
  {
    name: 'Prices',
    children: [
      {
        href: '/us-stocks',
        name: 'US Stocks',
      },
      {
        href: '/hk-warrents-cbbcs',
        name: 'HK Warrants and CBBCS',
      },
      {
        href: '/hk-stocks',
        name: 'HK Stock',
      },
      {
        href: '/hk-stocks-options',
        name: 'HK Stock Options',
      },
      {
        href: '/shanghai-shenzhen-stocks/',
        name: 'Shanghai and Shenzhen Stocks',
      },
      {
        href: '/financing-interest-rates',
        name: 'Financing Interest Rates',
      },
    ],
  },
  {
    name: 'Download',
    href: '/download',
  },
  {
    name: 'FAQs',
    href: '/faq',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
]

const dataMobile = [
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'How It Works',
    href: '/how-it-works',
  },
  {
    name: 'Prices',
    href: '/price',
    children: [
      {
        href: '/us-stocks',
        name: 'US Stocks',
      },
      {
        href: '/hk-warrents-cbbcs',
        name: 'HK Warrants and CBBCS',
      },
      {
        href: '/hk-stocks',
        name: 'HK Stock',
      },
      {
        href: '/hk-stocks-options',
        name: 'HK Stock Options',
      },
      {
        href: '/shanghai-shenzhen-stocks/',
        name: 'Shanghai and Shenzhen Stocks',
      },
      {
        href: '/financing-interest-rates',
        name: 'Financing Interest Rates',
      },
    ],
  },
  {
    name: 'Download',
    href: '/download',
  },
  {
    name: 'Blog',
    href: '/blog',
  },
  {
    name: 'Risk disclosure',
    href: '/risk-disclosure',
  },
  {
    name: 'FAQs',
    href: '/faq',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
]

export default class Header extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)

    this.state = {
      isOpen: false,
      scrolled: false,
      currentPath: '/',
      isDropDownOpen: false,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll)

    if (typeof window !== 'undefined') {
      // it's safe to use window now
      const path = window.location.pathname.split('/')[1]

      this.setState({
        currentPath: path,
      })
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll)
  }

  toggle() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }))
  }

  listenToScroll = () => {
    const instantPaths = ['terms', 'thank-you', 'privacy-policy', 'risk-disclosure', 'pricing']

    this.setState(prevState => ({
      scrolled:
        window.scrollY >
        (prevState.currentPath === ''
          ? 475
          : instantPaths.includes(prevState.currentPath)
          ? 50
          : 225),
    }))
  }

  useWhiteLogo = () => this.state.currentPath === 'home-au' || this.state.currentPath === 'home-us'

  render() {
    const {scrolled, isOpen} = this.state
    return (
      <>
        <StyledNavbar isOpen={isOpen} scrolled={scrolled} light expand="md" className="fixed-top">
          <div className="container mx--15">
            <NavbarBrand>
              <Link to="/">
                <Logo
                  isOpen={isOpen}
                  scrolled={scrolled}
                  src={logo}
                  white={this.useWhiteLogo() || this.props.white}
                  alt="company logo"
                />
              </Link>
            </NavbarBrand>
            <StyledNavbarToggler
              isOpen={this.state.isOpen}
              onClick={this.toggle}
              white={this.useWhiteLogo() || this.props.white}
              scrolled={scrolled}
            />
            <StyledCollapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto padding-10" navbar>
                <div className="on-mobile top-collapse-mobile mt-4">
                  <Link to="/">
                    <LogoIcon
                      className="mobile-logo"
                      scrolled={scrolled}
                      src={whiteLogoIcon}
                      alt="company logo"
                    />
                  </Link>
                  <button className="btn close-btn" onClick={this.toggle}>
                    X
                  </button>
                </div>
                {data.map((link, ndx) => {
                  if (link.children) {
                    return (
                      <div
                        style={{position: 'relative'}}
                        className={`nav-link on-desktop ${ndx !== data.length - 1 ? 'mr-1' : ''}`}
                      >
                        <Dropdown
                          nav
                          inNavbar
                          isOpen={this.state.isDropDownOpen}
                          onMouseEnter={() => this.setState({isDropDownOpen: true})}
                          onMouseLeave={() => this.setState({isDropDownOpen: false})}
                        >
                          <DropdownToggle nav caret className="p-0 d-flex align-items-center">
                            {link.name}
                          </DropdownToggle>
                          <DropdownMenu style={{background: 'white', opacity: 1, borderRadius: 0}}>
                            {link.children.map(childLink => (
                              <Link to={`price/${childLink.href}`}>
                                <DropdownItem>{childLink.name}</DropdownItem>
                              </Link>
                            ))}
                          </DropdownMenu>
                        </Dropdown>
                      </div>
                    )
                  }

                  return (
                    <div
                      style={{position: 'relative'}}
                      className={`nav-link on-desktop ${ndx !== data.length - 1 ? 'mr-4' : ''}`}
                    >
                      <Link
                        to={link.href}
                        className={`${
                          `/${this.state.currentPath}` === `${link.href}` ? 'custom-active' : ''
                        }`}
                      >
                        {link.name}
                      </Link>
                    </div>
                  )
                })}
                {dataMobile.map((link, ndx) => (
                  <div
                    style={{position: 'relative'}}
                    className={`nav-link on-mobile ${ndx !== data.length - 1 ? 'mr-4' : ''}`}
                  >
                    <Link
                      to={link.href}
                      className={`${
                        `/${this.state.currentPath}` === `${link.href}` ? 'custom-active' : ''
                      }`}
                    >
                      {link.name}
                    </Link>
                  </div>
                ))}
                <div className="on-mobile social-container">
                  <img
                    src={wechatIcon}
                    alt=""
                    style={{maxHeight: '30px', maxWidth: '30px'}}
                    className="wechat"
                    id="weChatIcon"
                    className="mr-4"
                  />

                  <StyledAnchor href="https://www.facebook.com/snowballsecurities" target="_blank">
                    <img id="fbIcon" src={facebookIcon} alt="" className="mr-4" />
                  </StyledAnchor>
                  <StyledAnchor
                    href="https://www.linkedin.com/company/snowballsecurities"
                    target="_blank"
                  >
                    <img src={linkedinIcon} alt="" className="mr-4" id="linkedInIcon" />
                  </StyledAnchor>

                  <StyledAnchor href="https://twitter.com/snowballsec?lang=en" target="_blank">
                    <img src={twitterIcon} alt="" id="twitterIcon" />
                  </StyledAnchor>
                </div>
                <div className="on-mobile lower-small-container">
                  <Link to="/privacy-policy">Privacy Policy</Link>
                  <Link to="/terms">Terms & Conditions</Link>
                </div>
              </Nav>
            </StyledCollapse>
          </div>
          <LangToggleContainer style={{top: '15px', right: '10px', position: 'absolute'}}>
            <a href="/">
              <div className="mb-0 bg-primary border-primary text-light">
                <p className="mb-0" style={{fontWeight: '500'}}>
                  A
                </p>
              </div>
            </a>
            <a href="https://www.snowballsecurities.com/">
              <div className="mb-0 border-primary bg-light" style={{paddingTop: '5px'}}>
                <p className="mb-0 text-primary " style={{fontWeight: '500'}}>
                  中
                </p>
              </div>
            </a>
          </LangToggleContainer>
        </StyledNavbar>

        <ScrolledNavbar isOpen={isOpen} scrolled={scrolled} light expand="md" className="fixed-top">
          <div className="container">
            <NavbarBrand>
              <Link to="/">
                <LogoIcon isOpen={isOpen} scrolled={scrolled} src={logoIcon} alt="company logo" />
              </Link>
            </NavbarBrand>

            <StyledCollapse isOpen={this.state.isOpen} navbar className="d-none">
              <Nav className="ml-auto scroll-nav" navbar>
                {data.map(link =>
                  link.href !== '' ? (
                    <div style={{position: 'relative'}} className="nav-link">
                      <Link
                        to={link.href}
                        activeClassName="custom-active-2"
                        style={{color: 'black'}}
                      >
                        {link.name}
                      </Link>
                    </div>
                  ) : (
                    <Link to="/download" activeClassName="custom-active-2" style={{color: 'black'}}>
                      Download
                    </Link>
                  )
                )}
              </Nav>
            </StyledCollapse>
          </div>
          <LangToggleContainer>
            <a href="/">
              <div className="mb-0 bg-primary border-primary text-light">
                <p className="mb-0" style={{fontWeight: '500'}}>
                  A
                </p>
              </div>
            </a>
            <a href="https://www.snowballsecurities.com/">
              <div className="mb-0 border-primary" style={{paddingTop: '3.5px'}}>
                <p className="mb-0 text-primary " style={{fontWeight: '500'}}>
                  中
                </p>
              </div>
            </a>
          </LangToggleContainer>
        </ScrolledNavbar>
      </>
    )
  }
}

const StyledNavbar = styled(Navbar)`
  width: 100%;
  top: ${props => (props.scrolled ? '-100px' : '0')} !important;
  transition: 0.5s;

  .nav-link {
    color: white !important;
  }

  /* @media (max-width: 767px) {
    background-color: ${props => (props.isOpen ? 'rgba(0,111,187,0.9)' : 'transparent')};
  } */

  @media (max-width: 426px) {
    top: 0 !important;
    height: 100px;

    background: ${props => (props.scrolled ? 'white' : 'transparent')};

    .navbar-brand {
      height: auto; 

      img {
        height: auto;
      }
    }
  }

`

const Logo = styled.img`
  height: 125px;
  width: 175px;
  object-fit: contain;
  filter: ${props => (props.white && !props.scrolled ? 'brightness(0) invert(1)' : 'none')};
  transition: 0.1s;
  z-index: 0;
`

const LogoIcon = styled.img`
  height: 20px;
  width: 20px;
  object-fit: contain;
  transition: 0.1s;

  &.mobile-logo {
    height: 50px;
    width: 50px;
  }
`

const StyledNavbarToggler = styled(NavbarToggler)`
  filter: ${props => (props.isOpen ? 'brightness(100) grayscale(100) contrast(100)' : 'none')};

  > .navbar-toggler-icon {
    filter: ${props => (props.white && !props.scrolled ? 'brightness(0) invert(1)' : '')};
  }

  :focus {
    outline: none;
  }
`

const StyledCollapse = styled(Collapse)`
  opacity: 0.8;
  width: 100vw;
  -webkit-transition: none;
  transition: none;

  .collapsing {
    -webkit-transition: none;
    transition: none;
    display: none;
  }

  .on-mobile {
    display: none;

    &.social-container {
      margin: 1.5rem 0 3rem 0;
    }

    #weChatIcon {
      max-height: 30px;
      max-width: 30px;
      filter: brightness(0) invert(1);
    }
  }

  .lower-small-container {
    font-size: 1rem;
    position: absolute;
    bottom: 70px;

    > a {
      margin-right: 1rem;
      color: white !important;
      text-decoration: underline;
    }
  }

  .top-collapse-mobile {
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3rem;
  }

  @media (max-width: 767px) {
    height: 100vh;
    position: fixed;
    opacity: 1;
    top: 0;
    left: 0;
    padding: 4px 18px;
    background-color: rgba(0, 111, 187, 0.9);

    .on-desktop {
      display: none;
    }

    .on-mobile {
      display: flex;
    }

    .close-btn {
      width: 50px;
      height: 50px;
      font-size: 2.5rem;
      padding: 0px;
      color: white;
    }

    .navbar-nav {
      height: 100%;
      width: 100%;
      font-size: 1.5rem;
    }
  }
`
const ScrolledNavbar = styled(Navbar)`
  width: 100%;
  height: 40px;
  top: ${props => (props.scrolled ? '0px' : '-100px')} !important;
  background-color: rgba(255, 255, 255, 1);
  padding-top: 0;
  padding-bottom: 0;
  transition: 0.5s;

  .navbar-brand {
    padding: 0px;
  }

  .nav-link {
    transition: 0.2s;

    color: ${props => props.active === true && 'white !important'};

    :hover {
      background-color: #006fbb !important;
      color: white !imporatant;
    }
  }

  @media (max-width: 767px) {
    background-color: ${props => (props.isOpen ? 'rgba(0,111,187,0.9)' : 'white')};
  }

  @media (max-width: 426px) {
    display: none;
  }
`

const LangToggleContainer = styled.div`
  right: 0;
  top: 0;
  display: flex;

  div {
    font-size: 12px;
    border-radius: 50px;
    border: 1px solid;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    padding-top: 2.75px;
  }

  @media (max-width: 426px) {
    display: none;
  }
`

const StyledAnchor = styled.a`
  img {
    max-height: 30px;
    max-width: 30px;
    filter: brightness(0) invert(1);
  }
  &:hover {
    opacity: 50%;
  }
`
