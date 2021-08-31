import React from 'react'
import styled from 'styled-components'
import { Container, Page, Typography, UserBadge } from '@toptal/picasso'
import { useQuery } from '@apollo/client'
import { Grid } from '@toptal/picasso/Grid/Grid'
import { Link as RouterLink } from 'react-router-dom'
import ShipsQuery from './query'
import IShips from '../../types/IShips'
import { ShipsSkeletonLoader } from './skeletonLoader'

const ShipsPage: React.FC<{}> = () => {
  const { loading, error, data } = useQuery<IShips>(ShipsQuery, {
    variables: { limit: 20 }
  })

  if (error) return <p>Error : {error.message}</p>

  const ShipCardWrapper = styled.div`
    background-color: #204ecf;
    padding: 1rem;
    width: 100%;
    height: 120px;
  `

  return (
    <Page>
      <Page.TopBar title="SpaceX" />
      <Page.Content>
        <Container padded={'xsmall'}>
          <Grid>
            {loading ? (
              <ShipsSkeletonLoader />
            ) : (
              data &&
              data.ships &&
              data.ships.map(ship => {
                const { id, name, image, model, status, year_built } = ship
                return (
                  <Grid.Item small={3}>
                    <RouterLink
                      to={`/ships/${id}`}
                      style={{ textDecoration: 'none' }}
                    >
                      <ShipCardWrapper>
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
                      </ShipCardWrapper>
                    </RouterLink>
                  </Grid.Item>
                )
              })
            )}
          </Grid>
        </Container>
      </Page.Content>
      <Page.Footer />
    </Page>
  )
}

export default ShipsPage
