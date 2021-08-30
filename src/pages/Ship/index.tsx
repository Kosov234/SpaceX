import { Container, Grid, Page, Typography, Image } from '@toptal/picasso'
import { useParams } from 'react-router-dom'
import React from 'react'
import { useQuery } from '@apollo/client'
import ShipQuery from '../Ship/query'
interface IShipDetailsParams {
  id: string
}

const ShipDetailsPage: React.FunctionComponent<{}> = () => {
  const { id }: IShipDetailsParams = useParams()

  const { loading, error, data } = useQuery(ShipQuery, {
    variables: { id }
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : {error.message}</p>

  const {
    name,
    image,
    model,
    status,
    year_built,
    home_port,
    successful_landings,
    type
  } = data.ship
  return (
    <Page>
      <Page.TopBar title="SpaceX" />
      <Page.Content>
        <Grid justifyContent="center" alignItems="center" spacing={0}>
          <Grid.Item small={4}>
            <Container
              padded="small"
              flex={true}
              justifyContent="center"
              alignItems="center"
            >
              <Image
                alt="Movie Image"
                src={
                  image === null
                    ? 'https://raw.githubusercontent.com/Kosov234/Movie-app/main/images/no_image.png'
                    : image
                }
                style={{ width: '350px', height: '500px' }}
              />
            </Container>
          </Grid.Item>
          <Grid.Item small={4}>
            <Container padded="small">
              <Typography size="xlarge" variant="heading" align="left">
                {name}
              </Typography>
              <Typography size="large">{model}</Typography>
              <Typography size="medium">
                Status: {status}
                <br />
                Year Built: {year_built}
                <br />
                Home Port:{home_port}
                <br />
                Successful Landings: {successful_landings}
                <br />
                Type: {type}
              </Typography>
            </Container>
          </Grid.Item>
        </Grid>
      </Page.Content>
      <Page.Footer />
    </Page>
  )
}

export default ShipDetailsPage
