// @flow
import React from 'react'
import {NavItem} from 'reactstrap'
import {Link} from 'gatsby'

type Props = {
  to: String,
  title: String,
}

function HeaderNavLink({to, title}: Props) {
  return (
    <NavItem>
      <Link to={to} className="nav-link">
        {title}
      </Link>
    </NavItem>
  )
}

export default HeaderNavLink
