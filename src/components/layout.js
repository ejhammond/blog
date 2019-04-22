import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import { primary, textKnockout } from "../utils/theme-colors"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.25),
            margin: 0,
            color: "inherit",
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            margin: 0,
            color: "inherit",
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
        }}
      >
        <header
          style={{
            padding: rhythm(3 / 4),

            backgroundColor: primary,
            color: textKnockout,
          }}
        >
          {header}
        </header>
        <main
          style={{ paddingLeft: rhythm(3 / 4), paddingRight: rhythm(3 / 4) }}
        >
          {children}
        </main>
        <footer
          style={{
            paddingTop: rhythm(1),
            paddingBottom: rhythm(1),
            paddingLeft: rhythm(3 / 4),
            paddingRight: rhythm(3 / 4),

            marginTop: rhythm(1),
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )
  }
}

export default Layout
