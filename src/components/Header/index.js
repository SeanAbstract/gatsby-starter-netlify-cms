import React from 'react'
import styled from 'styled-components'
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav} from 'reactstrap'
import {Link} from 'gatsby'

import './styles.scss'
import whiteLogo from '../../img/snowball-secure.png'
import logo from '../../img/logo.png'
import logoIcon from '../../../static/img/snowball-logo-x.png'

// import logoIcon from '../../images/icon-logo.png'

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
    href: '/price',
  },
  {
    name: 'Download',
    href: '',
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
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll)

    if (typeof window !== 'undefined') {
      // it's safe to use window now
      const path = window.location.pathname.split('/')[1]

      // if (path !== 'en' || path !== 'zh') {
      //   path = 'en'
      // }

      // path = 'en'

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
    this.setState({
      scrolled: window.scrollY > window.innerHeight / 2,
    })
  }

  render() {
    const {scrolled, isOpen} = this.state
    return (
      <>
        <StyledNavbar isOpen={isOpen} scrolled={scrolled} light expand="md" className="fixed-top">
          <div className="container">
            <NavbarBrand>
              <Link to="/">
                <Logo
                  isOpen={isOpen}
                  scrolled={scrolled}
                  src={this.props.white ? whiteLogo : logo}
                  alt="company logo"
                />
              </Link>
            </NavbarBrand>
            <StyledNavbarToggler isOpen={this.state.isOpen} onClick={this.toggle} />
            <StyledCollapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                {data.map(link =>
                  link.href !== '' ? (
                    <Link
                      to={link.href}
                      className={`nav-link ${
                        `/${this.state.currentPath}` === `${link.href}` ? 'custom-active' : ''
                      }`}
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a href="https://www.snowballsecurities.com/download" className="nav-link">
                      {link.name}
                    </a>
                  )
                )}
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
          <div className="container mr-2">
            <NavbarBrand>
              <Link to="/">
                <LogoIcon isOpen={isOpen} scrolled={scrolled} src={logoIcon} alt="company logo" />
              </Link>
            </NavbarBrand>
            <StyledNavbarToggler isOpen={this.state.isOpen} onClick={this.toggle} />
            <StyledCollapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto scroll-nav pr-5" navbar>
                {data.map(link =>
                  link.href !== '' ? (
                    <Link to={link.href} className="nav-link">
                      {link.name}
                    </Link>
                  ) : (
                    <a href="https://www.snowballsecurities.com/download" className="nav-link">
                      {link.name}
                    </a>
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

  @media (max-width: 767px) {
    background-color: ${props => (props.isOpen ? 'rgba(0,111,187,0.9)' : 'transparent')};
    margin-left: -0.5rem;
    margin-right: -0.5rem;
  }
`

const Logo = styled.img`
  height: 75px;
  width: 125px;
  object-fit: contain;
  filter: ${props => (props.isOpened ? 'brightness(100) grayscale(100) contrast(100)' : 'none')};
  transition: 0.1s;
`

const LogoIcon = styled.img`
  height: 20px;
  width: 20px;
  object-fit: contain;
  transition: 0.1s;
`

const StyledNavbarToggler = styled(NavbarToggler)`
  filter: ${props => (props.isOpen ? 'brightness(100) grayscale(100) contrast(100)' : 'none')};

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

  @media (max-width: 767px) {
    height: 100vh;
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

    :hover {
      /* background-color: rgba(0, 111, 187, 1) !important; */
      color: rgba(0, 111, 187, 1) !important;
    }
  }

  @media (max-width: 767px) {
    background-color: ${props => (props.isOpen ? 'rgba(0,111,187,0.9)' : 'white')};
  }
`

const LangToggleContainer = styled.div`
  right: 0;
  top: 0;
  display: flex;

  div {
    font-size: 12px;
    border-radius: 50px;
    border-color: ${props => props.theme.primary};
    border: 1px solid;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    padding-top: 2.75px;
  }
`
