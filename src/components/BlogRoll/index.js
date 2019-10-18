// @flow
import React from 'react'
import './styles.scss'

type Props = {
  blogs: Array<{
    title: string,
    description: string,
  }>,
}

function BlogRoll({blogs}: Props) {
  return <div className="blog-roll-container">{/* TODO */}</div>
}

export default BlogRoll
