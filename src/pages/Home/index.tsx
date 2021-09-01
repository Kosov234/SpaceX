import React from 'react'
import { Container, Link, Page, Typography } from '@toptal/picasso'
import { Link as RouterLink } from 'react-router-dom'

const HomePage: React.FC<{}> = () => {
  return (
    <Page>
      <Page.TopBar
        title="SpaceX"
        rightContent={
          <Container>
            <Link
              color="white"
              underline="none"
              as={RouterLink}
              to="/ships"
              style={{ margin: '15px' }}
            >
              Ships
            </Link>
            <Link
              color="white"
              underline="none"
              as={RouterLink}
              to="/users"
              style={{ margin: '15px' }}
            >
              Users
            </Link>
          </Container>
        }
      />
      <Page.Content>
        <Page.Article>
          <Content />
        </Page.Article>
      </Page.Content>
      <Page.Footer />
    </Page>
  )
}

const Content: React.FC<{}> = () => (
  <Container top="small" bottom="small">
    <Container bottom="small">
      <Typography align="center" variant="heading" size="large">
        SpaceX playground project
      </Typography>
    </Container>

    <Typography>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Typography>
  </Container>
)

export default HomePage
