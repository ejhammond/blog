import React from 'react';
import { Link } from 'gatsby';

import { rhythm, scale } from '../utils/typography';
import { primary, textKnockout } from '../utils/theme-colors';
import logo from '../../content/assets/ayhota-logo.png';

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    let header;

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.25),
            margin: 0,
            color: 'inherit',
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,

              display: 'flex',
              alignItems: 'center',
            }}
            to={`/`}
          >
            <img
              src={logo}
              alt="Site logo"
              style={{
                height: 50,
                width: 50,
                marginRight: 10,
                marginBottom: 0,
              }}
            />
            {title} | Blog
          </Link>
        </h1>
      );
    } else {
      header = (
        <h3
          style={{
            margin: 0,
            color: 'inherit',
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,

              display: 'flex',
              alignItems: 'center',
            }}
            to={`/`}
          >
            <img
              src={logo}
              alt="Site logo"
              style={{
                height: 32,
                width: 32,
                marginRight: 10,
                marginBottom: 0,
              }}
            />
            {title}
          </Link>
        </h3>
      );
    }
    return (
      <>
        <header
          style={{
            padding: rhythm(3 / 4),

            backgroundColor: primary,
            color: textKnockout,
          }}
        >
          {header}
        </header>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(32),
          }}
        >
          <main style={{ paddingLeft: rhythm(3 / 4), paddingRight: rhythm(3 / 4) }}>
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
      </>
    );
  }
}

export default Layout;
