import React from 'react'
import styled from 'styled-components'
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, Container} from 'reactstrap'
import {Link} from 'gatsby'

import whiteLogo from '../../../img/snowball-secure.png'
import logo from '../../../img/logo-2.png'
import logoIcon from '../../../img/logo-icon.png'

import HeaderNavLink from './headerNavLink'

export default class Header extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
      scrolled: false,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll)
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
        <StyledNavbar isOpen={isOpen} scrolled={scrolled} light expand="md" className="w-100">
          <Container style={{maxWidth: '85%'}}>
            <NavbarBrand>
              <Link to="/">
                <Logo isOpen={isOpen} scrolled={scrolled} src={whiteLogo} alt="company logo" />
              </Link>
            </NavbarBrand>
            <StyledNavbarToggler
              isOpen={isOpen}
              onClick={this.toggle}
              style={{filter: 'brightness(0) invert(1)'}}
            />
            <StyledCollapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <HeaderNavLink to="/about" title="About" />
                <HeaderNavLink to="/how-it-works" title="How It Works" />
                <HeaderNavLink to="/price" title="Prices" />
                <HeaderNavLink to="/" title="Download" />
                <HeaderNavLink to="/faqs" title="FAQs" />
                <HeaderNavLink to="/contact" title="Contact" />
              </Nav>
            </StyledCollapse>
          </Container>
        </StyledNavbar>
      </>
    )
  }
}

const setBackgroundColor = (isOpen, scrolled) => {
  if (isOpen) {
    return 'rgba(0,111,187,0.9)'
  }
  return scrolled ? 'white' : 'transparent'
}

const StyledNavbar = styled(Navbar)`
  top: 0px !important;
  /* background-color: ${props => setBackgroundColor(props.isOpen, props.scrolled)}; */
  position: absolute;
  transition: 0s;
  margin-left: -0.5rem;
  margin-right: -0.5rem;

  .nav-link {
    color: white !important;
  }

  @media (max-width: 767px) {
  }
`

const Logo = styled.img`
  height: 150px;
  width: 150px;
  object-fit: contain;
  filter: ${props => (props.isOpen ? 'brightness(100) grayscale(100) contrast(100)' : 'none')};
`

const StyledNavbarToggler = styled(NavbarToggler)`
  filter: ${props => (props.isOpen ? 'brightness(100) grayscale(100) contrast(100)' : 'none')};

  :focus {
    outline: none;
  }
`

const StyledCollapse = styled(Collapse)`
  /* background-color: ${props => props.theme.primary}; */
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
  top: ${props => (props.scrolled ? '0px' : '-100px')};
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
    display: none;
  }
`
