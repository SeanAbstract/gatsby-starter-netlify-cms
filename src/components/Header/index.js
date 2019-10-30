import React from 'react'
import styled from 'styled-components'
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav} from 'reactstrap'
import {Link} from 'gatsby'

import logo from '../../img/logo.png'
import logoIcon from '../../../static/img/snowball-logo-x.png'

// import logoIcon from '../../images/icon-logo.png'

export default class Header extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)

    this.state = {
      isOpen: false,
      scrolled: false,
      currentPath: '/en',
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll)

    if (typeof window !== 'undefined') {
      // it's safe to use window now
      let path = window.location.pathname.split('/')[1]

      if (path !== 'en' || path !== 'zh') {
        path = 'en'
      }

      this.setState({currentPath: path})
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
                <Logo isOpen={isOpen} scrolled={scrolled} src={logo} alt="company logo" />
              </Link>
            </NavbarBrand>
            <StyledNavbarToggler isOpen={this.state.isOpen} onClick={this.toggle} />
            <StyledCollapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <Link to="/about" className="nav-link">
                  About
                </Link>

                <Link to="/how-it-works" className="nav-link">
                  How It Works
                </Link>

                <Link to="/price" className="nav-link">
                  Prices
                </Link>

                <Link to="/" className="nav-link">
                  Download
                </Link>

                <Link to="/faq" className="nav-link">
                  FAQs
                </Link>

                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </Nav>
            </StyledCollapse>
          </div>
        </StyledNavbar>
        <ScrolledNavbar isOpen={isOpen} scrolled={scrolled} light expand="md" className="fixed-top">
          <div className="container">
            <NavbarBrand>
              <Link to="/">
                <LogoIcon isOpen={isOpen} scrolled={scrolled} src={logoIcon} alt="company logo" />
              </Link>
            </NavbarBrand>
            <StyledNavbarToggler isOpen={this.state.isOpen} onClick={this.toggle} />
            <StyledCollapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <Link to="/about" className="nav-link">
                  About
                </Link>

                <Link to="/how-it-works" className="nav-link">
                  How It Works
                </Link>

                <Link to="/price" className="nav-link">
                  Prices
                </Link>

                <Link to="/" className="nav-link">
                  Download
                </Link>

                <Link to="/faqs" className="nav-link">
                  FAQs
                </Link>

                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </Nav>
            </StyledCollapse>
          </div>
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
  height: 30px;
  width: 30px;
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
  top: ${props => (props.scrolled ? '0px' : '-100px')} !important;
  background-color: white;
  padding-top: 0;
  padding-bottom: 0;
  transition: 0.5s;

  .navbar-brand {
    padding: 0px;
  }

  .nav-link {
    transition: 0.2s;

    :hover {
      background-color: rgba(0, 111, 187, 1) !important;
      color: white !important;
    }
  }

  @media (max-width: 767px) {
    background-color: ${props => (props.isOpen ? 'rgba(0,111,187,0.9)' : 'white')};
  }
`
