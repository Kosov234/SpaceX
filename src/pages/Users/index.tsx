import {
  Container,
  Grid,
  Link,
  Page,
  Typography,
  UserBadge
} from '@toptal/picasso'
import { Link as RouterLink } from 'react-router-dom'
import React from 'react'
import { useQuery } from '@apollo/client'
import IUsers from '../../types/IUsers'
import { GetUsersQuery } from './queries'
import { CreateUserForm } from './createUserForm'

export const UsersPage: React.FC<{}> = () => {
  const { loading, error, data } = useQuery<IUsers>(GetUsersQuery, {
    variables: { limit: 20 }
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

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
          </Container>
        }
      />
      <Page.Content>
        <Page.Article>
          <Grid direction="row" justifyContent="space-between">
            <Grid.Item small={4}>
              <Container>
                {data?.users.map((user, idx) => {
                  return (
                    <Container padded={'small'} key={idx}>
                      <UserBadge name={user.name} size={'small'}>
                        <Container>
                          <Typography size="small">
                            Rocket: {user.rocket}
                          </Typography>
                          <Typography size="small">
                            Twitter: {user.twitter}
                          </Typography>
                        </Container>
                      </UserBadge>
                    </Container>
                  )
                })}
              </Container>
            </Grid.Item>
            <Grid.Item small={6}>
              <CreateUserForm />
            </Grid.Item>
          </Grid>
        </Page.Article>
      </Page.Content>
      <Page.Footer />
    </Page>
  )
}
