import React from "react"
import { PageLayout, PageTitle } from "../components"
import { Container, Image } from "react-bootstrap"
import { Link, graphql } from "gatsby"
import { SEO } from "../utils"

export default ({ data }) => {
  const MediaLink = ({ title, author, link }) => (
    <li key={title} style={{ color: "gray" }}>
      <a rel="noopener noreferrer" href={link}>
        {title}
      </a>
      &nbsp;-<i>{author}</i>
    </li>
  )

  const {
    author,
    occupation_one,
    occupation_two,
    readingList,
    designations,
    unemployed,
  } = data.site.siteMetadata

  const bookLinks = readingList.map(book => MediaLink(book))

  return (
    <PageLayout>
      <SEO title="About Me" />
      <PageTitle title="About Me" />
      <Container>
        <article className="about-content w-75 m-auto pt-2 text-justify">
          <p className="text-center">
            {designations.map((attr, i) => (
              <span key={attr}>
                &nbsp;<b>{attr}</b>&nbsp;
                {i < designations.length - 1 && <>||</>}
              </span>
            ))}
          </p>
          <p className="i-5 mt-4 pt-2">
            Hello everybody! My name is <b>{`${author}`}</b>. I am a&nbsp;
            <b>{occupation_one}</b> and <b>{occupation_two}</b> who is constantly looking
            to learn something new.
            My time is usually split between developing software, practicing martial arts,
            improving my sales skills, competing in combat sports,
            trying to understand theoretical physics, traveling
            to places not yet spoiled by tourism and learning how to hold a pair of chopsticks.
          </p>
          <p className="i-5">
            I created this site to showcase some of my different interests both personal and professional.
            Check out my <Link to="/resume">resume</Link> to see some of my work
            or check out my <Link to="/blog">blog</Link> to read some of my random reflections
            on this journey so far.
          </p>
        </article>
        <article className="w-75 m-auto">
          {unemployed && (
            <>
              <hr />
              <p className="unemployed">
                <small>
                  I am <b>currently looking for new opportunities</b>! If you
                  like what you <Link to="/resume">see</Link>, let's get
                  in&nbsp;
                  <a
                    href="mailto:red.five@rebellion.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    touch
                  </a>
                  !
                </small>
              </p>
            </>
          )}
          <hr />
          <h5 className="watch-list-title pt-8">
            Here are a couple of books from my reading list:
          </h5>
          <ul style={{ fontSize: "1.2rem", listStyle: "none" }}>{bookLinks}</ul>
        </article>
      </Container>
    </PageLayout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        unemployed
        occupation_one
        occupation_two
        author
        designations
        readingList {
          title
          author
          link
        }
      }
    }
  }
`
