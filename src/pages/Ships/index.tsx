import React from 'react'
import { Container, Page, Typography, UserBadge } from '@toptal/picasso'
import { useQuery } from '@apollo/client'
import { Grid } from '@toptal/picasso/Grid/Grid'
import { Link as RouterLink } from 'react-router-dom'
import ShipsQuery from './query'
import IShips from '../../types/IShips'

const ShipsPage: React.FC<{}> = () => {
  const { loading, error, data } = useQuery<IShips>(ShipsQuery, {
    variables: { limit: 20 }
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : {error.message}</p>

  return (
    <Page>
      <Page.TopBar title="SpaceX" />
      <Page.Content>
        <Container padded={'xsmall'}>
          <Grid>
            {data &&
              data.ships.map(ship => {
                const { id, name, image, model, status, year_built } = ship
                return (
                  <Grid.Item small={3}>
                    <RouterLink
                      to={`/ships/${id}`}
                      style={{ textDecoration: 'none' }}
                    >
                      <div
                        style={{
                          backgroundColor: '#204ecf',
                          padding: '1rem',
                          width: '100%',
                          height: '120px'
                        }}
                      >
                        <UserBadge
                          name={name}
                          avatar={image}
                          size="small"
                          invert
                        >
                          <Typography invert size="small">
                            {model}
                          </Typography>
                          <Typography invert size="small">
                            {status}
                          </Typography>
                          <Typography invert size="small">
                            {year_built}
                          </Typography>
                        </UserBadge>
                      </div>
                    </RouterLink>
                  </Grid.Item>
                )
              })}
          </Grid>
        </Container>
      </Page.Content>
      <Page.Footer />
    </Page>
  )
}

export default ShipsPage
