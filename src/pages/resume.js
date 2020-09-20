import React from 'react'
import { MDXRenderer } from 'gatsby-mdx'
import { graphql } from 'gatsby'

import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { rhythm, scale } from '../utils/typography'

const GITHUB_USERNAME = 'ejhammond'
const GITHUB_REPO_NAME = 'blog'

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        social {
          twitter
        }
      }
    }
  }
`

function Company(props) {
  const { name, timeframe, location, children } = props

  return (
    <section>
      <h3>{name}</h3>
      <div>{timeframe}</div>
      <div>{location}</div>
      {children}
    </section>
  )
}

function Role(props) {
  const { name, timeframe, children } = props

  return (
    <section>
      <h4>{name}</h4>
      <p>{timeframe}</p>
      <p>{children}</p>
    </section>
  )
}
class Resume extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const social = this.props.data.site.siteMetadata.social

    const editOnGitHubURL = `https://github.com/${GITHUB_USERNAME}/${GITHUB_REPO_NAME}/edit/master/src/pages/resume.js`

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="EJ Hammond Resume" description="EJ Hammond's resume" />
        <h1>Edward J Hammond</h1>
        <div>Preferred names: EJ</div>
        <div>Front End Engineer at Facebook</div>
        <div>Greater Boston Area</div>

        <a href={`https://twitter.com/${social.twitter}`}>@ejhammond</a>

        <section>
          <h2>Summary</h2>

          <p>
            Front End Dev. Passionate about UI/UX and design systems. Trying to
            break down the barriers between design and development.
          </p>
        </section>
        <section>
          <h2>Writing</h2>

          <p>
            Sometimes I write about tech topics on my blog,{' '}
            <a href="https://ayhota.com">Ayhota</a>.
          </p>
        </section>
        <section>
          <h2>Tech Highlights</h2>
          <section>
            <h3>Front End</h3>
            <ul>
              <li>JavaScript</li>
              <li>TypeScript, Flow</li>
              <li>CSS3, LESS, SASS</li>
              <li>HTML5 + Accessibility</li>
              <li>React</li>
              <li>Redux</li>
            </ul>
          </section>
          <section>
            <h3>Back End</h3>
            <ul>
              <li>NodeJS + Express, C# + MVC/WebAPI</li>
              <li>MongoDB, MS SQL</li>
              <li>AWS: S3, Cloudfront, Route53</li>
              <li>REST, GraphQL</li>
            </ul>
          </section>
        </section>
        <section>
          <h2>Experience</h2>
          <Company
            name="Facebook"
            location="Cambridge, MA"
            timeframe="< 1 year"
          >
            <Role name="Front End Engineer" timeframe="June 2020 - Present">
              Building UI's for internal tools
            </Role>
          </Company>
          <Company
            name="Vistaprint"
            location="Waltham, MA"
            timeframe="4 years 9 months"
          >
            <Role
              name="Lead Front End Developer (UI Team)"
              timeframe="March 2019 - June 2020 (1 year)"
            >
              Working directly with in-house and contract designers to create
              Vistaprint's first design system. Implementing a component library
              using React and SASS/CSS with a focus on accessibility.
              Teaching/mentoring team members across the org on front-end
              development concepts and best practices (esp. concerning
              JavaScript/React). Managing/supporting an open-source-like
              community of roughly 75-100 developers who are using the component
              library; this involves gathering feedback, communicating
              releases/changes, providing example code and documentation, and
              trying to convince folks to consider contributing the library etc.
            </Role>
            <Role
              name="Senior Front End Developer (Product Team)"
              timeframe="May 2018 - March 2019 (11 months)"
            >
              Specialized in front-end development for a product team. This
              involved building multiple interactive pages using React, Redux,
              and TypeScript and building the infrastructure to deploy and host
              them. Created an automated deployment pipeline using Jenkins,
              Docker, and AWS S3/Cloudfront. Mentored team members on front end
              development and delivered tech talks for the org on topics
              including React, Redux, TypeScript, and ES6+ JavaScript.
            </Role>
            <Role
              name="Senior Software Engineer (Innovation/Exploration Team)"
              timeframe="June 2017 - May 2018 (1 year)"
            >
              Worked on a small team to create the next generation of
              Vistaprint's web-based Business Card Builder. We used modern
              front-end technologies and we had a strong focus on
              user-experience, validating our features with customers early and
              often.
            </Role>
            <Role
              name="Senior Software Engineer (Product Team)"
              timeframe="June 2016 - June 2017 (1 year 1 month)"
            >
              Wrote full-stack web application solutions backed by C# and Nodejs
              servers on AWS and presented with React and JQuery on the front
              end.
            </Role>
            <Role
              name="Software Engineer"
              timeframe="October 2015 - June 2016 (9 months)"
            >
              Learned about the world of web development and built skills in C#
              MVC for web-server development and JavaScript/JQuery for front-end
              development.
            </Role>
          </Company>

          <Company
            name="CA Technologies"
            location="Framingham, MA"
            timeframe="1 year 5 months"
          >
            <Role
              name="Associate Software Engineer"
              timeframe="June 2014 - October 2015 (1 year 5 months)"
            >
              Worked on a team of 4 in an Agile Scrum environment. Fulfilled
              Scrum Master duties on a rotational basis. Programmed in C#,
              Python, and Java. Created automation using the Robot Framework and
              HP ALM
            </Role>
            <Role
              name="Software Engineering Intern"
              timeframe="June 2013 - September 2013 (4 months)"
            >
              Planned and managed a product's QA lifecycle using HP Application
              Lifecycle Manager (ALM). Formed a list of requirements to define
              the readiness of a product release. Created a full Python
              application with a GUI to regularly sync test results between a
              mainframe data set and the ALM web-app. Presented monthly project
              updates via Live-Meeting to a team of QA Engineers based around
              the world
            </Role>
          </Company>

          <Company name="EMC" location="Hopkinton, MA" timeframe="4 months">
            <Role
              name="Software Engineering Intern"
              timeframe="June 2012 - September 2012 (4 months)"
            >
              Created original technical documents on the subject of
              cryptography. Wrote sample code in C and Java for implementing
              OpenSSL cryptography in a software product. Performed security
              analyses on products using HP Fortify.
            </Role>
          </Company>
        </section>

        <section>
          <h2>Education</h2>

          <section>
            <h3>University of Massachusetts, Amherst</h3>
            <div>2010 - 2014</div>
            <div>Bachelor of Science (BS), Computer Systems Engineering</div>
          </section>
        </section>
        <hr
          style={{
            marginTop: rhythm(1),
            marginBottom: rhythm(1),
          }}
        />
        <a href={editOnGitHubURL} target="_blank" rel="noopener noreferrer">
          Edit on GitHub
        </a>
      </Layout>
    )
  }
}

export default Resume
